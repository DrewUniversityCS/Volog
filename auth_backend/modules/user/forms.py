"""
File Name: Forms
Purpose: Classes for creating django input forms.
Comments:
"""

from django import forms
from auth_backend.modules.user.models import BaseVologUser, Referral
from django import forms

from api.logistics.choice_enums import YEAR_IN_SCHOOL_CHOICES
from api.models import Student, Mentor
from auth_backend.modules.user.models import BaseVologUser, Referral


class ProfileForm(forms.ModelForm):
    referral_code = forms.CharField()
    student_id = forms.IntegerField(widget=forms.NumberInput(attrs={'class': 'student_form'}), required=False)
    class_standing = forms.ChoiceField(choices=[x.value for x in YEAR_IN_SCHOOL_CHOICES], widget=forms.Select(attrs={'class': 'student_form'}), required=False)
    mentor = forms.ModelChoiceField(queryset=Mentor.objects.filter(user__is_profile_complete=True), widget=forms.Select(attrs={'class': 'student_form'}), required=False)

    class Meta:
        model = BaseVologUser
        widgets = {
            'role': forms.Select(attrs={'class': 'user_role'})
        }
        fields = ('first_name', 'last_name', 'role', 'student_id', 'class_standing', 'mentor', )
        required = ('first_name', 'last_name', 'role', )

    def clean(self):
        cleaned_data = super().clean()
        referral = cleaned_data['referral_code']
        role = cleaned_data['role']
        if not self.validate_referral(referral, role, self.instance.email):
            self.add_error('referral_code', 'Referral code is not valid or is already used!')
        else:
            del cleaned_data['referral_code']

        if role == 0:  # Faculty
            pass
        elif role == 1:  # Student
            sid = cleaned_data['student_id']
            cl_stand = cleaned_data['class_standing']
            mentor = cleaned_data['mentor']
            student = Student.objects.create(student_id=sid, class_standing=cl_stand, DAS_mentor=mentor, user=self.instance)
            student.save()
        elif role == 2:  # Mentor
            mentor = Mentor.objects.create(user=self.instance)
            mentor.save()
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
