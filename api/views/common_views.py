from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response

from logistics.serializers import BugReportSerializer
from api.models import BugReport


class BugReportListView(generics.ListAPIView):
    """
    API endpoint to get all existing bug reports.
    """
    serializer_class = BugReportSerializer

    def get_queryset(self):
        return BugReport.objects.all()


class PostBugReportView(generics.CreateAPIView):
    """
    API endpoint for users to submit bug reports.
    """
    serializer_class = BugReportSerializer

    def post(self, request, *args, **kwargs):
        data = request.data
        print(data)
        if 'submission_author' not in data:
            user = self.request.user
            data['submission_author'] = user.id
        print(data)
        serializer = BugReportSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
