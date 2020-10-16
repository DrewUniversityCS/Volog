from django.contrib import admin
from auth_backend.modules.user.models import User, Referral

models = [User, Referral]

for model in models:
    admin.site.register(model)
