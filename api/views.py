from rest_framework import viewsets

from api.serializers import StudentSerializer
from api.models import Student


class HeroViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all().order_by('name')
    serializer_class = StudentSerializer
