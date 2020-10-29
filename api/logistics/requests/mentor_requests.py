"""
File Name: Mentor Requests
Purpose: API requests for interacting with and manipulating Mentor database data.
Comments:
"""

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.logistics.serializers import MentorSerializer
from api.models import Mentor


@api_view(['GET', 'POST'])
def mentor_list(request):
    """
    List all mentors, or create a new mentor.
    """
    if request.method == 'GET':
        mentors = Mentor.objects.all()
        serializer = MentorSerializer(mentors, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = MentorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def mentor_detail(request, pk):
    """
    Retrieve, update or delete a mentor.
    """
    try:
        mentor = Mentor.objects.get(pk=pk)
    except Mentor.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = MentorSerializer(mentor)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = MentorSerializer(mentor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        mentor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
