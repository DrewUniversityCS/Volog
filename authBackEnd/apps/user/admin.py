from django.contrib import admin
from authBackEnd.apps.user import models as account_models

admin.site.register(account_models.User)
admin.site.register(account_models.Referral)
