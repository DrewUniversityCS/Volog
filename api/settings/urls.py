"""
File Name: Urls
Purpose: Url paths for the API app.
Comments:
"""

from django.urls import include, path

import api.views.hour_views
import api.views.mentor_views
import api.views.student_views

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
from api.views.user_views import UserListView, GetRequestUserData

urlpatterns = [
    path('api/auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/students/', api.views.student_views.StudentListView.as_view()),
    path('api/students/current/', api.views.student_views.CurrentStudentView.as_view()),
    path('api/students/current/hours/', api.views.hour_views.CurrentStudentHoursView.as_view()),
    path('api/mentors/', api.views.mentor_views.MentorListView.as_view()),
    path('api/users/', UserListView.as_view()),
    path('api/users/current', GetRequestUserData.as_view()),
    path('api/details/', GetRequestUserData.as_view())
]
