from rest_framework import (
    viewsets as rest_viewsets,
    permissions as rest_permissions,
    filters as rest_filters
)

from api.logistics.serializers import GroupSerializer, StudentGroupSerializer
from api.models import Group, StudentGroup


class GroupView(rest_viewsets.ModelViewSet):
    """ Group View : for creating, updating and getting info abount the group  """
    serializer_class = GroupSerializer
    # add faculty permission here
    # permission_classes = (rest_permissions.IsAuthenticated,)
    filter_backends = (
        rest_filters.OrderingFilter,
        rest_filters.SearchFilter,
    )
    ordering_fields = ('created_at',)
    search_fields = ('name', 'mentor__user__first_name',)
    http_method_names = ('get', 'post', 'patch',)

    def get_queryset(self):
        query = Group.objects.filter()
        return query


class StudentGroupView(rest_viewsets.ModelViewSet):
    """ Group User View: for managing relation between a group and user and their roles """
    serializer_class = StudentGroupSerializer
    # add faculty permission here
    # permission_classes = (rest_permissions.IsAuthenticated,)
    lookup_field = 'user_id'
    filter_backends = (
        rest_filters.OrderingFilter,
        rest_filters.SearchFilter
    )
    pagination_class = None
    ordering_fields = ('student__user__created_at',)
    search_fields = ('student__user__first_name', 'student__user__email',)
    http_method_names = ('get', 'post', 'patch', 'delete',)

    def get_queryset(self):
        return StudentGroup.objects.select_related("student").filter(
            group_id=self.kwargs.get('group_id')
        )

    def get_serializer(self, *args, **kwargs):
        """ if an array is passed, set serializer to many """
        return super().get_serializer(*args, **kwargs)
