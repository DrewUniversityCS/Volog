"""
File Name: Views
Purpose: Django views for rendering a variety of data.
Comments:
"""
from django.views.generic.edit import FormView
from auth_backend.modules.common.mixins import LoginRequiredMixin, AdminRequiredMixin
from auth_backend.modules.user.models import Referral
from auth_backend.modules.superAdmin.forms import ReferralCreateForm


class CreateReferralView(LoginRequiredMixin, AdminRequiredMixin, FormView):
    """
    Django view for creating platform referral codes.
    """
    template_name = 'superAdmin/referral_create.html'
    form_class = ReferralCreateForm
    success_url = '/superAdmin/referrals'

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context.update({
            'referrals': Referral.objects.order_by('-created_at')
        })
        return context
