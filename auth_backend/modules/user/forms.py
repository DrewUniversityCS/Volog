from django import forms
from .models import User, Referral


class ProfileForm(forms.ModelForm):
    referral_code = forms.CharField()

    class Meta:
        model = User
        widgets = {
            'graduation_class': forms.DateInput(attrs={'class': 'datepicker'}),
        }
        fields = ('first_name', 'last_name', 'school_id', 'graduation_class', 'role')
        required = ('first_name', 'last_name', 'school_id', 'graduation_class', 'role')

    def clean(self):
        cleaned_data = super().clean()
        referral = cleaned_data['referral_code']
        role = cleaned_data['role']
        if not self.validate_referral(referral, role, self.instance.email):
            self.add_error('referral_code', 'Referral code is not valid or is already used!')
        else:
            del cleaned_data['referral_code']
        print(cleaned_data)
        return self.cleaned_data

    @staticmethod
    def validate_referral(referral_code, role, email):
        """ Validate and update referral code status """
        try:
            code = Referral.objects.get(code=referral_code)
            if code.email == email and code.role == role and not code.is_used:
                code.is_used = True
                code.save()
                return True
        except Referral.DoesNotExist:
            return False

        return False
