from django.contrib import admin
from auth_backend.modules.user.models import BaseVologUser, Referral
from .models import Student, Mentor

models = [Student, Mentor]

for model in models:
    admin.site.register(model)
