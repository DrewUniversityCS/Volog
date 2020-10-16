from django.contrib import admin
from api.models import Student

# Register your models here.

models = [Student]

for model in models:
    admin.site.register(model)
