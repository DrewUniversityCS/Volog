"""
File Name: Urls
Purpose: Url paths this application uses.
Comments:
"""

from django.urls import path

from .views import ProfileCreateView, ProfileCreateSuccessView

urlpatterns = [
    path('profile_create/', ProfileCreateView.as_view(), name='profile_create'),
    path('profile_create_success/', ProfileCreateSuccessView.as_view(), name='profile_create_success')
]

app_name = 'user'
