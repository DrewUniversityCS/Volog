"""
File Name: Urls
Purpose: Url paths this application uses.
Comments:
"""

from django.urls import path

from .views import ProfileCreationView, ProfileSuccessfullyCreatedView

urlpatterns = [
    path('profile_create/', ProfileCreationView.as_view(), name='profile_create'),
    path('profile_create_success/', ProfileSuccessfullyCreatedView.as_view(), name='profile_create_success')
]

app_name = 'user'
