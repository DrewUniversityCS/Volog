from django.urls import path
from .views import CreateReferralView, DashboardView, ProfileCreateView

urlpatterns = [
    path('', DashboardView.as_view(), name='dashboard'),
    path('referrals/', CreateReferralView.as_view(), name='referral'),
    path('profile_create/', ProfileCreateView.as_view(), name='profile_create')
]
