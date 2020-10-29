"""
File Name: Admin
Purpose: Django admin file for registering api models.
Comments:
"""

from django.contrib import admin
from api.models import Student, Mentor, HourInstance

# Register all of the api models here.

models = [Student, Mentor, HourInstance]

for model in models:
    admin.site.register(model)
