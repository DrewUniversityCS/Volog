from django.contrib import admin
from api.models import Student, HourInstance

# Register all of the api models here.

models = [Student]

for model in models:
    admin.site.register(model)


class HourInstanceInline(admin.TabularInline):
    model = HourInstance


class TimeMasterAdmin(admin.ModelAdmin):
    inlines = [
        HourInstanceInline,
    ]
