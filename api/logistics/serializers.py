from rest_framework import serializers

from api.models import Student, Mentor


class MentorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mentor
        fields = ['first_name', 'last_name', 'email']


class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student
        fields = ['student_id', 'password', 'first_name', 'last_name', 'email', 'role', 'class_standing']
