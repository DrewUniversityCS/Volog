from django.contrib import admin
from api.models import Student, Mentor, HourInstance, ActivityCategory

models = [Student, Mentor, HourInstance, ActivityCategory]

for model in models:
    admin.site.register(model)