from django.views.generic import TemplateView
from .forms import ReferralCreateForm, ProfileForm
from django.views.generic.edit import FormView
from .models import Referral
from .mixins import LoginRequiredMixin, AdminRequiredMixin


# TODO: This file just doesn't work. We need to figure out how to replace all of the templates with react somehow.


class DashboardView(LoginRequiredMixin, TemplateView):
    template_name = "dashboard/home.html"


class CreateReferralView(LoginRequiredMixin, AdminRequiredMixin, FormView):
    template_name = 'sadmin/referral_create.html'
    form_class = ReferralCreateForm
    success_url = '/sadmin/referrals'

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context.update({
            'referrals': Referral.objects.all()
        })
        return context


class ProfileCreateView(FormView):
    template_name = 'user/profile_create.html'
    form_class = ProfileForm
    success_url = '/'

    def form_valid(self, form):
        print('Ran form valid')
        print(form.cleaned_data)
        form.save()
        self.request.user.is_profile_complete = True
        self.request.user.save()
        return super().form_valid(form)

    def get_form_kwargs(self):
        form_kwargs = super().get_form_kwargs()
        form_kwargs['instance'] = self.request.user
        return form_kwargs
