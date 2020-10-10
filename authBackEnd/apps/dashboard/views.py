from django.views.generic import TemplateView
from authBackEnd.apps.common.mixins import LoginRequiredMixin


class DashboardView(LoginRequiredMixin, TemplateView):
    template_name = "dashboard/home.html"


class AppView(LoginRequiredMixin, TemplateView):
    template_name = 'index.html'
