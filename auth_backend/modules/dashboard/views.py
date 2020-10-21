from django.views.generic import TemplateView

from auth_backend.modules.common.mixins import LoginRequiredMixin

# class AppView(LoginRequiredMixin, TemplateView):
class AppView(TemplateView):
    template_name = 'index.html'
