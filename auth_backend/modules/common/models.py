"""
File Name: Models
Purpose: Database models this application uses.
Comments:
"""

from django.db import models
from django.utils.translation import gettext as _


class TimeStamp(models.Model):
    """ TimeStamp Model that records time based information about itself. """

    created_at = models.DateTimeField(_('created at'), auto_now_add=True)
    updated_at = models.DateTimeField(_('updated at'), auto_now=True)

    class Meta:
        abstract = True
