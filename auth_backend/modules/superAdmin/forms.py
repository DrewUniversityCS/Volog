from django import forms
from auth_backend.modules.user.models import Referral


class ReferralCreateForm(forms.ModelForm):
    class Meta:
        model = Referral
        fields = ('role',)
        required = ('role', )
