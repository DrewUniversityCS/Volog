import csv
from collections import OrderedDict

from django.db.models import Sum
from django.db.models.functions import ExtractMonth
from django.http import HttpResponse, JsonResponse
from rest_framework import generics, viewsets, pagination
from rest_framework import status
from rest_framework.response import Response

from api.logistics.serializers import HourSerializer, ActivityCategorySerializer
from api.models import Student, HourInstance, ActivityCategory


def parse_hour_type(oval):
    if oval == "Required":
        return 'REQ'
    elif oval == "Pre-Approved":
        return 'PRE'
    elif oval == "Active":
        return 'ACT'
    elif oval == "Receptive":
        return 'REC'


class CurrentStudentHoursView(generics.ListAPIView):
    """
    API endpoint to retrieve hours for the current (session) student.
    """
    serializer_class = HourSerializer

    def get_queryset(self):
        user = self.request.user
        student = Student.objects.filter(user=user)[0]
        hours = HourInstance.objects.filter(student=student)
        return hours.all()


class ActivityCategoriesView(generics.ListAPIView):
    """
    API endpoint to get the currently possible hour activity categories.
    """
    serializer_class = ActivityCategorySerializer

    def get_queryset(self):
        return ActivityCategory.objects.all()


def parse_hour_data(request):
    data = request.data
    if 'student' not in data:
        user = request.user
        student = Student.objects.filter(user=user)[0].pk
        data['student'] = student
        data['type_of_hour'] = parse_hour_type(data['type_of_hour'])
        data['learning_goal'] = data['learning_goal'].upper()

    act_cat = data['activity_category']

    if not act_cat.isdigit():
        data['activity_category'] = ActivityCategory.objects.filter(title=act_cat)[0].id

    return data


class PostHourSubmissionView(generics.CreateAPIView):
    """
    API endpoint for students to post hours.
    """
    serializer_class = HourSerializer

    def post(self, request, *args, **kwargs):
        data = parse_hour_data(request)

        # we are setting the serializer context to access the request variable in the serializers init method
        kwargs.setdefault('context', self.get_serializer_context())

        serializer = HourSerializer(data=data, **kwargs)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HoursPaginator(pagination.PageNumberPagination):
    page_size = 10

    def get_paginated_response(self, data):

        query = HourInstance.objects.all()
        request_type = self.request.GET.get('type')
        request_id = self.request.GET.get('id', )
        if request_type == 'student':
            query = query.filter(student_id=request_id)
        elif request_type == 'mentor':
            query = query.filter(student__studentgroup__group__mentor_id=request_id)

        approved = query.filter(approval_status='APPROVED').aggregate(Sum('number_of_hours'), Sum('number_of_minutes'))
        declined = query.filter(approval_status='DECLINED').aggregate(Sum('number_of_hours'), Sum('number_of_minutes'))
        pending = query.filter(approval_status='PENDING').aggregate(Sum('number_of_hours'), Sum('number_of_minutes'))

        pending_hours = pending['number_of_hours__sum'] if pending['number_of_hours__sum'] else 0 + pending[
            'number_of_minutes__sum'] / 60 if pending['number_of_minutes__sum'] else 0
        pending_minutes = pending['number_of_minutes__sum'] % 60 if pending['number_of_minutes__sum'] else 0
        approved_hours = approved['number_of_hours__sum'] if approved['number_of_hours__sum'] else 0 + approved[
            'number_of_minutes__sum'] / 60 if approved['number_of_minutes__sum'] else 0
        approved_minutes = approved['number_of_minutes__sum'] % 60 if approved['number_of_minutes__sum'] else 0
        declined_hours = declined['number_of_hours__sum'] if declined['number_of_hours__sum'] else 0 + declined[
            'number_of_minutes__sum'] / 60 if declined['number_of_minutes__sum'] else 0
        declined_minutes = declined['number_of_minutes__sum'] % 60 if declined['number_of_minutes__sum'] else 0

        return Response(OrderedDict([
            ('count', self.page.paginator.count),
            ('pending_hours', pending_hours),
            ('pending_minutes', pending_minutes),
            ('approved_hours', approved_hours),
            ('approved_minutes', approved_minutes),
            ('declined_hours', declined_hours),
            ('declined_minutes', declined_minutes),
            ('next', self.get_next_link()),
            ('previous', self.get_previous_link()),
            ('results', data)
        ]))


class HourInstanceViewSet(viewsets.ModelViewSet):
    """ HourInstance View : for updating and getting info about the HourInstance  """
    serializer_class = HourSerializer
    pagination_class = HoursPaginator

    def get_queryset(self):
        query = HourInstance.objects.all()
        request_type = self.request.GET.get('type')
        request_id = self.request.GET.get('id', )
        request_status = self.request.GET.get('status')
        if request_type == 'student':
            query = query.filter(student_id=request_id)
        elif request_type == 'mentor':
            query = query.filter(student__studentgroup__group__mentor_id=request_id)
        if request_status:
            query = query.filter(approval_status=request_status)
        return query

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        # for PATCH Request
        if partial:
            instance = self.get_object()
            serializer = self.get_serializer(instance, data=request.data, partial=partial)
            serializer.is_valid(raise_exception=True)
            self.perform_update(serializer)
            if getattr(instance, '_prefetched_objects_cache', None):
                # If 'prefetch_related' has been applied to a queryset, we need to
                # forcibly invalidate the prefetch cache on the instance.
                instance._prefetched_objects_cache = {}
            return Response(serializer.data)
        instance = self.get_object()

        data = parse_hour_data(request)

        kwargs.setdefault('context', self.get_serializer_context())
        serializer = self.get_serializer(instance, data=data, partial=partial, **kwargs)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)


def student_hour_report(request):
    student = Student.objects.get(id=request.GET.get('id', ))
    hours = HourInstance.objects.filter(student=student)
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = f'attachment; filename="{student}_hour_report.csv"'

    writer = csv.writer(response)
    writer.writerow([
        'Date of activity',
        'Number of hours',
        'Number of minutes',
        'Type of hour',
        'Learning goal',
        'Activity category',
        'Mentor comment',
        'Approval status',
    ])

    for hour in hours:
        row = [
            hour.date_of_activity,
            hour.number_of_hours,
            hour.number_of_minutes,
            hour.type_of_hour,
            hour.learning_goal,
            hour.activity_category,
            hour.mentor_comment,
            hour.approval_status,
        ]
        writer.writerow(row)

    return response


def all_students_hour_report(request):
    students = Student.objects.all()
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = f'attachment; filename="hour_report.csv"'

    writer = csv.writer(response)
    writer.writerow([
        'Student',
        'All hours',
        'All minutes',
        'Pending hours',
        'Pending minutes',
        'Approved hours',
        'Approved minutes',
        'Declined hours',
        'Declined minutes',

    ])

    for student in students:
        hours = HourInstance.objects.filter(student=student)
        all = hours.aggregate(Sum('number_of_hours'), Sum('number_of_minutes'))
        approved = hours.filter(approval_status='APPROVED').aggregate(Sum('number_of_hours'), Sum('number_of_minutes'))
        declined = hours.filter(approval_status='DECLINED').aggregate(Sum('number_of_hours'), Sum('number_of_minutes'))
        pending = hours.filter(approval_status='PENDING').aggregate(Sum('number_of_hours'), Sum('number_of_minutes'))

        all_hours = all['number_of_hours__sum'] if all['number_of_hours__sum'] else 0 + all[
            'number_of_minutes__sum'] / 60 if all['number_of_minutes__sum'] else 0
        all_minutes = all['number_of_minutes__sum'] % 60 if all['number_of_minutes__sum'] else 0

        pending_hours = pending['number_of_hours__sum'] if pending['number_of_hours__sum'] else 0 + pending[
            'number_of_minutes__sum'] / 60 if pending['number_of_minutes__sum'] else 0
        pending_minutes = pending['number_of_minutes__sum'] % 60 if pending['number_of_minutes__sum'] else 0

        approved_hours = approved['number_of_hours__sum'] if approved['number_of_hours__sum'] else 0 + approved[
            'number_of_minutes__sum'] / 60 if approved['number_of_minutes__sum'] else 0
        aprooved_minutes = approved['number_of_minutes__sum'] % 60 if approved['number_of_minutes__sum'] else 0

        declined_hours = declined['number_of_hours__sum'] if declined['number_of_hours__sum'] else 0 + declined[
            'number_of_minutes__sum'] / 60 if declined['number_of_minutes__sum'] else 0
        declined_minutes = declined['number_of_minutes__sum'] % 60 if declined['number_of_minutes__sum'] else 0

        row = [
            student,
            all_hours,
            all_minutes,
            pending_hours,
            pending_minutes,
            approved_hours,
            aprooved_minutes,
            declined_hours,
            declined_minutes
        ]
        writer.writerow(row)

    return response


def hour_stats(request):
    hours = HourInstance.objects.all().annotate(month=ExtractMonth('created_at')).values(
        'month', 'number_of_hours', 'number_of_minutes'
    )
    result = {
        'labels': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ],
        'datasets': [
            {
                'label': 'Reported Hours',
                'data': [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                ],
                'backgroundColor': 'rgba(114, 190, 114, 0.6)',
            }
        ]
    }
    for hour in hours:
        min = hour['number_of_minutes'] / 60
        result['datasets'][0]['data'][int(hour['month']) - 1] += (hour['number_of_hours'] + min)
    print(result)
    return JsonResponse(result)
