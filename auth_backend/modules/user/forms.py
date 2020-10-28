"""
File Name: Forms
Purpose: Classes for creating django input forms.
Comments:
"""

from django import forms

from api.models import Student, Mentor
from auth_backend.modules.user.models import Referral, BaseVologUser


class ProfileForm(forms.ModelForm):
    referral_code = forms.CharField()

    class Meta:
        model = BaseVologUser
        fields = ('first_name', 'last_name', 'role')
        required = ('first_name', 'last_name', 'role')

    def clean(self):
        cleaned_data = super().clean()
        referral = cleaned_data['referral_code']
        role = cleaned_data['role']
        if not self.validate_referral(referral, role, self.instance.email):
            self.add_error('referral_code', 'Referral code is not valid or is already used!')
        else:
            del cleaned_data['referral_code']
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


class StudentForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = ('student_id', 'class_standing', 'DAS_mentor')
        required = ('student_id', 'class_standing', 'DAS_mentor')


class MentorForm(forms.ModelForm):
    class Meta:
        model = Mentor
        fields = ()
        required = ()
