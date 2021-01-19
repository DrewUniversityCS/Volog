from django.contrib import admin

from api.models import Student, Mentor, HourInstance, ActivityCategory, \
    Group, StudentGroup, Notification, StudentNotificationSeenStatus

models = [Student, Mentor, HourInstance, Group, StudentGroup,
          ActivityCategory, Notification, StudentNotificationSeenStatus]

for model in models:
    admin.site.register(model)
