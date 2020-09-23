from django import forms
from apps.user.models import Referral


class ReferralCreateForm(forms.ModelForm):
    class Meta:
        model = Referral
        fields = ('role',)
        required = ('role', )
