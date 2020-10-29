"""
File Name: Urls
Purpose: Url paths for the API app.
Comments:
"""

from django.urls import include, path

from api import views
# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
from api.views import UserListView, UserApiView

urlpatterns = [
    path('api/auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/students/', views.StudentListView.as_view()),
    path('api/students/current/', views.CurrentStudentView.as_view()),
    path('api/students/current/hours/', views.CurrentStudentHoursView.as_view()),
    path('api/mentors/', views.MentorListView.as_view()),
    path('api/users/', UserListView.as_view()),
    path('api/users/current', UserApiView.as_view()),
    path('api/details/', UserApiView.as_view())
]
