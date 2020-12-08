"""
File Name: Urls
Purpose: Url paths for the API app.
Comments:
"""

from django.urls import include, path
from rest_framework import routers
import api.views.common_views
import api.views.hour_views
import api.views.mentor_views
import api.views.student_views
from api.views.group_views import GroupView, StudentGroupView

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
from api.views.user_views import UserListView, GetRequestUserData

router = routers.SimpleRouter()
router.register('api/groups', GroupView, basename='group')
router.register(
    'api/groups/(?P<group_id>\d+)/members', StudentGroupView, basename='group_student'
)
router.register('api/hours', api.views.hour_views.HourInstanceViewSet, basename='hour')
router.register('api/notifications', api.views.common_views.NotificationsViewSet, basename='notifications')

urlpatterns = [
    # Auth Endpoints
    path('api/auth/', include('rest_framework.urls', namespace='rest_framework')),
    # Student Endpoints
    path('api/students/', api.views.student_views.StudentListView.as_view()),
    path('api/students/current/', api.views.student_views.CurrentStudentView.as_view()),
    path('api/students/current/hours/', api.views.hour_views.CurrentStudentHoursView.as_view()),
    path('api/students/current/hourReport/', api.views.hour_views.PostHourSubmissionView.as_view()),
    # Mentor Endpoints
    path('api/mentors/', api.views.mentor_views.MentorListView.as_view()),
    # User Data Endpoints
    path('api/users/', UserListView.as_view()),
    path('api/users/current/', GetRequestUserData.as_view()),
    # Group Data Endpoints
    path('api/group/students/current/', api.views.mentor_views.GroupStudentsListView.as_view()),
    # Hour Related Endpoints
    path('api/hours/report/', api.views.hour_views.student_hour_report),
    path('api/hours/all_students_hour_report/', api.views.hour_views.all_students_hour_report),
    path('api/hours/stats/', api.views.hour_views.hour_stats),
    # User Feedback Endpoints
    path('api/feedback/post/', api.views.common_views.PostFeedbackFormView.as_view()),
    path('api/feedback/list/', api.views.common_views.FeedbackFormListView.as_view()),
    # Bug Reports
    path('api/bug_report/post/', api.views.common_views.PostBugReportView.as_view()),
    path('api/bug_report/list/', api.views.common_views.BugReportListView.as_view()),
    # Misc Endpoints
    path('api/activity_categories/', api.views.hour_views.ActivityCategoriesView.as_view()),
]

urlpatterns += router.urls
