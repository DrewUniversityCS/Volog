from django.urls import path, include, re_path
from .views import AppView

urlpatterns = [
    re_path(r'^.*$', AppView.as_view(), name='app'),
]
app_name = 'app'

