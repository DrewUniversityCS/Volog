from django.contrib import admin
from api.models import Student, Mentor, HourInstance

models = [Student, Mentor, HourInstance]

for model in models:
    admin.site.register(model)
