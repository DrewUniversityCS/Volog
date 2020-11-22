"""
File Name: Urls
Purpose: Url paths this application uses.
Comments:
"""

from django.urls import re_path

from auth_backend.modules.common.views import AppView

urlpatterns = [
    re_path(r'^.*$', AppView.as_view(), name='app'),
]

app_name = 'app'
