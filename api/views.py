"""
File Name: Views
Purpose: Django views for rendering a variety of data.
Comments:
"""
from rest_framework import generics, permissions
from rest_framework import (
    viewsets as rest_viewsets,
    filters as rest_filters,
    permissions as rest_permissions,
    pagination as rest_pagination
)
from rest_framework.response import Response
from rest_framework.views import APIView

from api.logistics.serializers import StudentSerializer, MentorSerializer, HourSerializer
from api.models import Student, Mentor, HourInstance
from auth_backend.modules.common import constants as common_constants
from auth_backend.modules.superAdmin.admin_permissions import AdminRequired
from auth_backend.modules.user.models import BaseVologUser
from auth_backend.modules.user.serializers import UserSerializer


class StudentListView(generics.ListAPIView):
    """
    API endpoint to retrieve a list of all students.
    """
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class MentorListView(generics.ListAPIView):
    """
    API endpoint to retrieve a list of all mentors.
    """
    queryset = Mentor.objects.all()
    serializer_class = MentorSerializer


class UserListView(generics.ListCreateAPIView):
    """
    API endpoint to retrieve a list of all users.
    """
    permission_classes = (permissions.IsAuthenticated,)
    queryset = BaseVologUser.objects.all()
    serializer_class = UserSerializer


class CurrentStudentView(APIView):
    """
    API endpoint to retrieve data for the current (session) student.
    """

    def get(self, request):
        student = Student.objects.filter(user=self.request.user)[0]
        serializer = StudentSerializer(student)
        return Response(serializer.data)


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
