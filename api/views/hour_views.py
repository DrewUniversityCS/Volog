from rest_framework import generics

from api.logistics.serializers import HourSerializer
from api.models import Student, HourInstance


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
