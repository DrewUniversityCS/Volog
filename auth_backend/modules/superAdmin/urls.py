from django.urls import path
from .views import CreateReferralView

urlpatterns = [
    path('referrals/', CreateReferralView.as_view(), name='referral')
]

app_name = 'superAdmin'
