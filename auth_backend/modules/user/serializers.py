from .models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'id', 'first_name', 'last_name', 'school_id', 'graduation_class', 'role',)
