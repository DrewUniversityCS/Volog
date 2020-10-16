from django.urls import path
from .views import ProfileCreateView, ProfileCreateSuccessView, UserApiView

urlpatterns = [
    path('profile_create/', ProfileCreateView.as_view(), name='profile_create'),
    path('profile_create_success/', ProfileCreateSuccessView.as_view(), name='profile_create_success'),
    path('api/details/', UserApiView.as_view(), name='user_details')
]

app_name = 'user'

