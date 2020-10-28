"""
File Name: Views
Purpose: Django views for rendering a variety of data.
Comments:
"""
from rest_framework.views import APIView
from rest_framework.response import Response
from api.logistics.serializers import StudentSerializer, MentorSerializer, HourSerializer
from api.models import Student, Mentor, HourInstance
from rest_framework import generics, permissions

from auth_backend.modules.user.models import BaseVologUser
from auth_backend.modules.user.serializers import UserSerializer


class StudentListView(generics.ListAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class MentorListView(generics.ListAPIView):
    queryset = Mentor.objects.all()
    serializer_class = MentorSerializer


class UserListView(generics.ListCreateAPIView):
    """
    API endpoint to retrieve current user info
    """
    permission_classes = (permissions.IsAuthenticated,)
    queryset = BaseVologUser.objects.all()
    serializer_class = UserSerializer


class CurrentStudentView(APIView):
    def get(self, request):
        student = Student.objects.filter(user=self.request.user)[0]
        print(student)
        serializer = StudentSerializer(student)
        return Response(serializer.data)


class CurrentStudentHoursView(generics.ListAPIView):
    serializer_class = HourSerializer

    def get_queryset(self):
        user = self.request.user
        student = Student.objects.filter(user=user)[0]
        hours = HourInstance.objects.filter(student=student)
        return hours.all()


class UserApiView(APIView):
    """
    API endpoint to retrieve user info
    """
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
