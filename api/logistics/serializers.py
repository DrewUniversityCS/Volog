from rest_framework import serializers

from api.models import Student


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('first_name', 'last_name', 'student_id', 'email', 'class_standing')
    
