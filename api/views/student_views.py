from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from api.logistics.serializers import StudentSerializer
from api.models import Student


class CurrentStudentView(APIView):
    """
    API endpoint to retrieve data for the current (session) student.
    """

    def get(self, request):
        student = Student.objects.filter(user=self.request.user)[0]
        serializer = StudentSerializer(student)
        return Response(serializer.data)


class StudentListView(generics.ListAPIView):
    """
    API endpoint to retrieve a list of all students.
    """
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
