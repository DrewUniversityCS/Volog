from api.serializers import StudentSerializer
from api.models import Student
from rest_framework import generics


class StudentListView(generics.ListCreateAPIView):
    queryset = Student.objects.all().order_by('name')
    serializer_class = StudentSerializer
