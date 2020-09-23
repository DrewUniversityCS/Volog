from django.views.generic import TemplateView
from apps.common.mixins import LoginRequiredMixin


class DashboardView(LoginRequiredMixin, TemplateView):
    template_name = "dashboard/home.html"

