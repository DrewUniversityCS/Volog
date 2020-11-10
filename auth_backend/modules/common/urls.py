"""
File Name: Urls
Purpose: Url paths this application uses.
Comments:
"""

from django.urls import re_path

from modules.common.views import AppView

urlpatterns = [
    re_path(r'^.*$', AppView.as_view(), name='app'),
]

app_name = 'common'
