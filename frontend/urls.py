from django.conf.urls import url
from django.urls import path

from .views import index

"""
This resolves any issues between react router and django urls.
For more info read here:
https://stackoverflow.com/questions/40826295/react-routing-and-django-url-conflict
"""

urlpatterns = [
    path('', index),
    # match the root
    url(r'^$', index),
    # match all other pages
    url(r'^(?:.*)/?$', index)
]
