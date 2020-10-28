"""
File Name: Forms
Purpose: Classes for creating django input forms.
Comments:
"""

from django import forms

from auth_backend.modules.user.models import Referral


class ReferralCreateForm(forms.ModelForm):
    class Meta:
        model = Referral
        fields = ('role', 'email',)
        required = ('role', 'email',)
