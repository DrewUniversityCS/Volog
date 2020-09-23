from django.contrib import admin
from apps.user import models as account_models

admin.site.register(account_models.User)
admin.site.register(account_models.Referral)
