from rest_framework import serializers
from auth_backend.modules.user.serializers import UserSerializer
from api.models import Student, Mentor


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
