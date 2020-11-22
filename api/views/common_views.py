from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response

from api.logistics.serializers import BugReportSerializer, FeedbackFormSerializer
from api.models import BugReport, FeedbackForm


class FeedbackFormListView(generics.ListAPIView):
    serializer_class = FeedbackFormSerializer

    def get_queryset(self):
        return FeedbackForm.objects.all()


class BugReportListView(generics.ListAPIView):
    """
    API endpoint to get all existing bug reports.
    """
    serializer_class = BugReportSerializer

    def get_queryset(self):
        return BugReport.objects.all()


class PostFeedbackFormView(generics.CreateAPIView):
    """
    API endpoint for users to submit feedback forms.
    """
    serializer_class = FeedbackFormSerializer

    def post(self, request, *args, **kwargs):
        data = request.data
        if 'submission_author' not in data:
            user = self.request.user
            data['submission_author'] = user.id
        serializer = FeedbackFormSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PostBugReportView(generics.CreateAPIView):
    """
    API endpoint for users to submit bug reports.
    """
    serializer_class = BugReportSerializer

    def post(self, request, *args, **kwargs):
        data = request.data
        if 'submission_author' not in data:
            user = self.request.user
            data['submission_author'] = user.id
        serializer = BugReportSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
