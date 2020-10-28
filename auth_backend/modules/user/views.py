"""
File Name: Views
Purpose: Django views for rendering a variety of data.
Comments:
"""
from django.urls import reverse
from django.views.generic import TemplateView
from django.views.generic.edit import FormView

from auth_backend.modules.common.mixins import LoginRequiredMixin
from auth_backend.modules.user.forms import ProfileForm, StudentForm, MentorForm


class ProfileCreateView(FormView):
    template_name = 'user/profile_create.html'
    form_class = ProfileForm

    def get_success_url(self):
        role = self.request.user.role

        if role == 0:
            return reverse('user:profile_create_success')
        elif role == 1:
            return reverse('user:profile_student_info')
        elif role == 2:
            return reverse('user:profile_mentor_info')

    def form_valid(self, form):
        form.save()
        self.request.user.is_profile_complete = True
        self.request.user.save()

        return super().form_valid(form)

    def get_form_kwargs(self):
        form_kwargs = super().get_form_kwargs()
        form_kwargs['instance'] = self.request.user
        return form_kwargs


class ProfileCreateSuccessView(LoginRequiredMixin, TemplateView):
    template_name = "user/profile_create_success.html"


class ProfileStudentInfoView(LoginRequiredMixin, FormView):
    template_name = "user/profile_student_info.html"
    form_class = StudentForm

    def get_success_url(self):
        return reverse('user:profile_create_success')

    def form_valid(self, form):
        student = form.save(commit=False)
        student.user = self.request.user
        student.save()

        return super().form_valid(form)


class ProfileMentorInfoView(LoginRequiredMixin, FormView):
    template_name = "user/profile_mentor_info.html"
    form_class = MentorForm

    def get_success_url(self):
        return reverse('user:profile_create_success')

    def form_valid(self, form):
        mentor = form.save(commit=False)
        mentor.user = self.request.user
        mentor.save()

        return super().form_valid(form)
