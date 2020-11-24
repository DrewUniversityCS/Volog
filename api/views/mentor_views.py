from collections import OrderedDict
from django.db.models import Sum
from rest_framework import generics
from rest_framework import (
    filters as rest_filters
)
from rest_framework import pagination
from rest_framework.response import Response
from rest_framework import generics

from api.logistics.serializers import MentorSerializer, StudentGroupSerializer
from api.models import Mentor, StudentGroup, HourInstance


class MentorListView(generics.ListAPIView):
    """
    API endpoint to retrieve a list of all mentors.
    """
    serializer_class = MentorSerializer
    filter_backends = (
        rest_filters.OrderingFilter,
        rest_filters.SearchFilter,
    )
    search_fields = ('user__first_name', 'user__last_name', 'user__email',)
    ordering_fields = ('created_at',)

    @property
    def paginator(self):
        paginator = super().paginator

        if 'full_list' in self.request.query_params:
            paginator = None
        return paginator

    def get_queryset(self):
        if 'all' in self.request.query_params:
            return Mentor.objects.all()
        if 'without_group' in self.request.query_params:
            return Mentor.objects.filter(group__isnull=True)
        return Mentor.objects.all()


class GroupStudentPaginator(pagination.PageNumberPagination):
    page_size = 10
    def get_paginated_response(self, data):
        query = HourInstance.objects.filter(student__studentgroup__group__mentor__user=self.request.user)
        approved = query.filter(approval_status='APPROVED').aggregate(Sum('number_of_hours'), Sum('number_of_minutes'))
        pending = query.filter(approval_status='PENDING').aggregate(Sum('number_of_hours'), Sum('number_of_minutes'))
        pending_hours = pending['number_of_hours__sum'] if pending['number_of_hours__sum'] else 0 + pending[
            'number_of_minutes__sum'] / 60 if pending['number_of_minutes__sum'] else 0
        approved_hours = approved['number_of_hours__sum'] if approved['number_of_hours__sum'] else 0 + approved[
            'number_of_minutes__sum'] / 60 if approved['number_of_minutes__sum'] else 0
        # print(pending_minutes)
        return Response(OrderedDict([
            ('count', self.page.paginator.count),
            ('pending_hours', pending_hours),
            ('approved_hours', approved_hours),
            ('next', self.get_next_link()),
            ('previous', self.get_previous_link()),
            ('results', data)
        ]))


class GroupStudentsListView(generics.ListAPIView):
    serializer_class = StudentGroupSerializer
    pagination_class = GroupStudentPaginator

    filter_backends = (
        rest_filters.OrderingFilter,
        rest_filters.SearchFilter,
    )
    search_fields = ('student__user__first_name', 'student__user__last_name', 'student__user__email',)
    ordering_fields = ('created_at',)

    def get_queryset(self):
        return StudentGroup.objects.filter(group__mentor=self.request.user.mentor_set.first())
