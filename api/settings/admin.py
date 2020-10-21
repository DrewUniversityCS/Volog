from django.contrib import admin
from api.models import Student, Mentor, HourInstance

# Register all of the api models here.

models = [Student, Mentor, HourInstance]

for model in models:
    admin.site.register(model)


class HourInstanceInline(admin.TabularInline):
    model = HourInstance
