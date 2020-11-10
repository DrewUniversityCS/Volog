from rest_framework import (
    filters as rest_filters
)
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
    serializer_class = StudentSerializer
    filter_backends = (
        rest_filters.OrderingFilter,
        rest_filters.SearchFilter,
    )
    search_fields = ('user__first_name', 'user__last_name', 'user__email',)
    ordering_fields = ('created_at',)

    @property
    def paginator(self):
        paginator = super().paginator
        if 'full_list' in self.request.query_params:
            paginator = None
        return paginator

    def get_queryset(self):
        if 'all' in self.request.query_params:
            return Student.objects.all()
        if 'without_group' in self.request.query_params:
            return Student.objects.filter(studentgroup__isnull=True)
        return Student.objects.all()
