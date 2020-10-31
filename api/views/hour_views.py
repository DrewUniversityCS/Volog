from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response

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


class PostHourSubmissionView(generics.CreateAPIView):
    """
    API endpoint for students to post hours.
    """
    serializer_class = HourSerializer

    def post(self, request, *args, **kwargs):
        serializer = HourSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
