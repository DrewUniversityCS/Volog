from django.contrib import admin
from api.models import Student

# Register all of the api models here.

models = [Student]

for model in models:
    admin.site.register(model)
