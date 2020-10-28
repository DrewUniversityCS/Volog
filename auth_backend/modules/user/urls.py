"""
File Name: Urls
Purpose: Url paths this application uses.
Comments:
"""

from django.urls import path

from .views import ProfileCreateView, ProfileCreateSuccessView, UserApiView, ProfileStudentInfoView, \
    ProfileMentorInfoView

urlpatterns = [
    path('profile_create/', ProfileCreateView.as_view(), name='profile_create'),
    path('profile_create_success/', ProfileCreateSuccessView.as_view(), name='profile_create_success'),
    path('profile_student_info/', ProfileStudentInfoView.as_view(), name='profile_student_info'),
    path('profile_mentor_info/', ProfileMentorInfoView.as_view(), name='profile_mentor_info'),
    path('api/details/', UserApiView.as_view(), name='user_details')
]

app_name = 'user'
