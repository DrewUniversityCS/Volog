from django.urls import include, path
from api import views

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('api/auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/students/', views.StudentListView.as_view()),
    path('api/mentors/', views.MentorListView.as_view())
]
