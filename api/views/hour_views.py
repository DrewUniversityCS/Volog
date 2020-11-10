from collections import OrderedDict

from django.db.models import Sum
from rest_framework import generics, viewsets, pagination
from rest_framework import status
from rest_framework.response import Response

from api.logistics.serializers import HourSerializer, ActivityCategorySerializer
from api.models import Student, HourInstance, ActivityCategory


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


class PostHourSubmissionView(generics.CreateAPIView):
    """
    API endpoint for students to post hours.
    """
    serializer_class = HourSerializer

    def post(self, request, *args, **kwargs):
        def parse_hour_type(oval):
            if oval == "Required":
                return 'REQ'
            elif oval == "Pre-Approved":
                return 'PRE'
            elif oval == "Active":
                return 'ACT'
            elif oval == "Receptive":
                return 'REC'

        data = request.data
        if 'student' not in data:
            user = self.request.user
            student = Student.objects.filter(user=user)[0].pk
            data['student'] = student
            data['type_of_hour'] = parse_hour_type(data['type_of_hour'])
            data['learning_goal'] = data['learning_goal'].upper()

        act_cat = data['activity_category']
        # print(act_cat)
        if not act_cat.isdigit():
            data['activity_category'] = ActivityCategory.objects.filter(title=act_cat)[0].id

        serializer = HourSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class HoursPaginator(pagination.PageNumberPagination):
    page_size = 10

    def get_paginated_response(self, data):

        query = HourInstance.objects.all()
        type = self.request.GET.get('type')
        id = self.request.GET.get('id', )
        if type == 'student':
            query = query.filter(student_id=id)
        elif type == 'mentor':
            query = query.filter(student__studentgroup__group__mentor_id=id)

        approved = query.filter(approval_status='APPROVED').aggregate(Sum('number_of_hours'), Sum('number_of_minutes'))
        declined = query.filter(approval_status='DECLINED').aggregate(Sum('number_of_hours'), Sum('number_of_minutes'))
        pending = query.filter(approval_status='PENDING').aggregate(Sum('number_of_hours'), Sum('number_of_minutes'))


        pending_hours = pending['number_of_hours__sum'] if pending['number_of_hours__sum'] else 0 + pending['number_of_minutes__sum']/60 if pending['number_of_minutes__sum'] else 0
        pending_minutes = pending['number_of_minutes__sum'] % 60 if pending['number_of_minutes__sum'] else 0
        approved_hours = approved['number_of_hours__sum'] if approved['number_of_hours__sum'] else 0 + approved['number_of_minutes__sum']/60 if approved['number_of_minutes__sum'] else 0
        aprooved_minutes = approved['number_of_minutes__sum'] % 60 if approved['number_of_minutes__sum'] else 0
        declined_hours = declined['number_of_hours__sum'] if declined['number_of_hours__sum'] else 0 + declined['number_of_minutes__sum']/60 if declined['number_of_minutes__sum'] else 0
        declined_minutes = declined['number_of_minutes__sum'] % 60 if declined['number_of_minutes__sum'] else 0

        # print(pending_minutes)

        return Response(OrderedDict([
            ('count', self.page.paginator.count),
            ('pending_hours', pending_hours),
            ('pending_minutes', pending_minutes),
            ('approved_hours', approved_hours),
            ('approved_minutes', aprooved_minutes),
            ('declined_hours', declined_hours),
            ('declined_minutes', declined_minutes),
            ('next', self.get_next_link()),
            ('previous', self.get_previous_link()),
            ('results', data)
        ]))


class HourInstanceViewSet(viewsets.ModelViewSet):
    """ HourInstance View : for updating and getting info abount the HourInstance  """
    serializer_class = HourSerializer
    pagination_class = HoursPaginator

    def get_queryset(self):
        query = HourInstance.objects.all()
        print(query)
        type = self.request.GET.get('type')
        id = self.request.GET.get('id',)
        status = self.request.GET.get('status')
        if type == 'student':
            query = query.filter(student_id=id)
        elif type == 'mentor':
            print()
            query = query.filter(student__studentgroup__group__mentor_id=id)
        if status:
            query = query.filter(approval_status=status)
        return query