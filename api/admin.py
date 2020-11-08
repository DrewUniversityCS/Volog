from django.contrib import admin
from api.models import Student, Mentor, HourInstance, Group, StudentGroup

models = [Student, Mentor, HourInstance, Group, StudentGroup]

for model in models:
    admin.site.register(model)