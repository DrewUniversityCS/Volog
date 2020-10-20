from .models import BaseVologUser
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = BaseVologUser
        fields = '__all__'
