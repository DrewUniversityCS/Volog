from django.contrib import admin
from api.models import Student, Mentor

models = [Student, Mentor]

for model in models:
    admin.site.register(model)
