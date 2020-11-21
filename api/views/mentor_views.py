from rest_framework import (
    filters as rest_filters
)
from rest_framework import generics

from api.logistics.serializers import MentorSerializer, StudentGroupSerializer
from api.models import Mentor, StudentGroup


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


class GroupStudentsListView(generics.ListAPIView):
    serializer_class = StudentGroupSerializer
    filter_backends = (
        rest_filters.OrderingFilter,
        rest_filters.SearchFilter,
    )
    search_fields = ('student__user__first_name', 'student__user__last_name', 'student__user__email',)
    ordering_fields = ('created_at',)

    def get_queryset(self):
        # print(self.request.user.mentor_set.first())
        return StudentGroup.objects.filter(group__mentor=self.request.user.mentor_set.first())
