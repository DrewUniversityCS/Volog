from api.logistics.serializers import StudentSerializer, MentorSerializer
from api.models import Student, Mentor
from rest_framework import generics


class StudentListView(generics.ListCreateAPIView):
    queryset = Student.objects.all().order_by('student_id')
    serializer_class = StudentSerializer


class MentorListView(generics.ListCreateAPIView):
    queryset = Mentor.objects.all().order_by('first_name')
    serializer_class = MentorSerializer
