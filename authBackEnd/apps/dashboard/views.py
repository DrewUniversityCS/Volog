from django.views.generic import TemplateView
from authBackEnd.apps.common.mixins import LoginRequiredMixin


class AppView(LoginRequiredMixin, TemplateView):
    template_name = 'index.html'
