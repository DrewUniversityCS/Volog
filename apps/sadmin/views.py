from .forms import ReferralCreateForm
from django.views.generic.edit import FormView
from apps.user.models import Referral
from apps.common.mixins import LoginRequiredMixin, AdminRequiredMixin


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

