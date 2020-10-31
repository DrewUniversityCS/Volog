from rest_framework import generics, permissions, viewsets as rest_viewsets, permissions as rest_permissions, \
    filters as rest_filters, pagination as rest_pagination

from auth_backend.modules.common import constants as common_constants
from auth_backend.modules.superAdmin.admin_permissions import AdminRequired
from auth_backend.modules.user.models import BaseVologUser
from auth_backend.modules.user.serializers import UserSerializer


class UserListView(generics.ListCreateAPIView):
    """
    API endpoint to retrieve a list of all users.
    """
    permission_classes = (permissions.IsAuthenticated,)
    queryset = BaseVologUser.objects.all()
    serializer_class = UserSerializer


class UserSearchView(rest_viewsets.ModelViewSet):
    """
    API view for searching the user database.
    """

    serializer_class = UserSerializer
    permission_classes = (
        rest_permissions.IsAuthenticated, AdminRequired,
    )
    filter_backends = [
        rest_filters.OrderingFilter,
        rest_filters.SearchFilter
    ]
    search_fields = ('email', 'first_name')
    pagination_class = rest_pagination.PageNumberPagination
    ordering = ('-created_at',)

    def get_queryset(self):
        role = self.request.GET.get('role')
        query = BaseVologUser.objects.filter(is_profile_complete=True)
        if role == 'student':
            query = query.filter(role=common_constants.ROLE.STUDENT)
        elif role == 'Admin':
            query = query.filter(role=common_constants.ROLE.ADMIN)
        elif role == 'mentor':
            query = query.filter(role=common_constants.ROLE.TEACHER)
        return query
