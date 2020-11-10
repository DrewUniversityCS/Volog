from django.contrib import admin
from api.models import Student, Mentor, HourInstance, ActivityCategory, Group, StudentGroup

models = [Student, Mentor, HourInstance, Group, StudentGroup, ActivityCategory]

for model in models:
    admin.site.register(model)
