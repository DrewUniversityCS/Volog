from django.db import models
from django.utils.translation import gettext as _


class TimeStamp(models.Model):
    """ TimeStamp Model """

    created_at = models.DateTimeField(_('created at'), auto_now_add=True)
    updated_at = models.DateTimeField(_('updated at'), auto_now=True)

    class Meta:
        abstract = True
