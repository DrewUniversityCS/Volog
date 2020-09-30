from django.contrib import admin
from .models import User, Referral

models = [User, Referral]

for model in models:
    admin.site.register(model)
