"""
File Name: Serializers
Purpose: Serializers for translating database data before sending it over the API.
Comments:
"""

from rest_framework import serializers

from api.models import Student, Mentor, HourInstance, ActivityCategory
from auth_backend.modules.user.serializers import UserSerializer


class MentorSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)

    class Meta:
        model = Mentor
        fields = ['user']


class StudentSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)

    class Meta:
        model = Student
        fields = ['user', 'student_id', 'class_standing']


class ActivityCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ActivityCategory
        fields = ['title']


class HourSerializer(serializers.ModelSerializer):

    class Meta:
        model = HourInstance
        fields = ['student', 'date_of_activity', 'number_of_hours', 'number_of_minutes', 'activity_description',
                  'activity_category', 'type_of_hour', 'learning_goal', 'approved']
