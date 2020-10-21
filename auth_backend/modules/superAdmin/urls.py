from django.urls import path, include
from .views import CreateReferralView, UserView
from rest_framework.routers import DefaultRouter

# The router enables us to create dynamic urls

router = DefaultRouter()

router.register('users-details', UserView, basename='user-details')
# That is, if for example added 1 or 2 ,etc.it will give show the student that has the id 1, etc.
urlpatterns = [
    path('referrals/', CreateReferralView.as_view(), name='referral'),
    path('', include(router.urls)),
]

app_name = 'superAdmin'
