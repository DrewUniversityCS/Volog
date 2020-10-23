from api.logistics.serializers import StudentSerializer, MentorSerializer
from api.models import Student, Mentor
from rest_framework import generics, permissions

from auth_backend.modules.user.models import BaseVologUser
from auth_backend.modules.user.serializers import UserSerializer


class StudentListView(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class MentorListView(generics.ListCreateAPIView):
    queryset = Mentor.objects.all()
    serializer_class = MentorSerializer


class UserListView(generics.ListCreateAPIView):
    """
    API endpoint to retrieve current user info
    """
    permission_classes = (permissions.IsAuthenticated,)
    queryset = BaseVologUser.objects.all()
    serializer_class = UserSerializer
