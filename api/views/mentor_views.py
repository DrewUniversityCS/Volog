from rest_framework import generics

from api.logistics.serializers import MentorSerializer
from api.models import Mentor


class MentorListView(generics.ListAPIView):
    """
    API endpoint to retrieve a list of all mentors.
    """
    queryset = Mentor.objects.all()
    serializer_class = MentorSerializer
