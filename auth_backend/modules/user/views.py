from django.views.generic.edit import FormView
from django.urls import reverse
from django.views.generic import TemplateView

from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response

from auth_backend.modules.common.mixins import LoginRequiredMixin

from .forms import ProfileForm
from .models import User
from .serializers import UserSerializer


class ProfileCreateView(FormView):
    template_name = 'user/profile_create.html'
    form_class = ProfileForm

    def get_success_url(self):
        return reverse('user:profile_create_success')

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


class UserApiView(APIView):
    """
    API endpoint to retrieve user info
    """
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
