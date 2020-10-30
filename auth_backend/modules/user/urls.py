"""
File Name: Urls
Purpose: Url paths this application uses.
Comments:
"""

from django.urls import path

from .views import ProfileCreationView, ProfileSuccessfullyCreatedView, GetRequestUserData

urlpatterns = [
    path('profile_create/', ProfileCreationView.as_view(), name='profile_create'),
    path('profile_create_success/', ProfileSuccessfullyCreatedView.as_view(), name='profile_create_success'),
    path('api/details/', GetRequestUserData.as_view(), name='user_details')
]

app_name = 'user'
