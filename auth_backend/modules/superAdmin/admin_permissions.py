from rest_framework import (
    exceptions as rest_framework_exceptions,
    permissions as rest_framework_permissions,
)


class AdminRequired(rest_framework_permissions.BasePermission):

    def has_permission(self, request, view):
        """
        Return `True` if permission is granted(if user is Admin), `False` otherwise.
        """
        return request.user.is_admin
