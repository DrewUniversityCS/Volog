from django.urls import path
from .views import ProfileCreateView

urlpatterns = [
    path('profile_create/', ProfileCreateView.as_view(), name='profile_create')
]

app_name = 'user'

