from django.urls import path, include
from .views import CreateReferralView, UserView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('users-details', UserView, basename='user-details')

urlpatterns = [
    path('referrals/', CreateReferralView.as_view(), name='referral'),
    path('', include(router.urls)),
]

app_name = 'superAdmin'
