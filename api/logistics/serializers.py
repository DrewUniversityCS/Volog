from rest_framework import serializers

from api.models import Student, Mentor, TimeMaster


class MentorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mentor
        fields = ('first_name', 'last_name', 'email')


class TimeMasterSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeMaster
        fields = ['percent_complete', 'student']


class StudentSerializer(serializers.ModelSerializer):
    hour_sheet = TimeMasterSerializer(read_only=True)

    class Meta:
        model = Student
        fields = ['first_name', 'last_name', 'student_id', 'email', 'class_standing', 'DAS_mentor', 'hour_sheet']
