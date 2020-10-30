"""
File Name: Urls
Purpose: Url paths this application uses.
Comments:
"""

from django.urls import path, include
from rest_framework.routers import DefaultRouter

from api.views import UserSearchView
from auth_backend.modules.superAdmin.utilities import bulk_invite
from auth_backend.modules.superAdmin.views import CreateReferralView

# The router enables us to create dynamic urls
router = DefaultRouter()
router.register('users-details', UserSearchView, basename='user-details')

# That is, if for example added 1 or 2 ,etc.it will give show the student that has the id 1, etc.
urlpatterns = [
    path('referrals/', CreateReferralView.as_view(), name='referral'),
    path('bulk-invite/', bulk_invite, name='bulk_invite'),
    path('', include(router.urls)),
]

app_name = 'superAdmin'
