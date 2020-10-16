from api.logistics.serializers import StudentSerializer
from api.models import Student
from rest_framework import generics


class StudentListView(generics.ListCreateAPIView):
    """
    API endpoint  allows students to be viewed or edited.
    """
    queryset = Student.objects.all().order_by('student_id')
    serializer_class = StudentSerializer
