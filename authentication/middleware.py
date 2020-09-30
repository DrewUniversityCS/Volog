from django.http import HttpResponseRedirect
from django.urls import reverse, resolve
from django.utils.deprecation import MiddlewareMixin


class ProfileComplete(MiddlewareMixin):
    """
    Middleware to force user to fill profile before Dashboard
    """

    def process_request(self, request):
        current_url = resolve(request.path_info).url_name

        # Checking if authenticated user has force_pass_change as True
        if request.user.is_authenticated and not request.user.is_profile_complete and current_url != 'profile_create' \
                and not request.user.is_superuser:
            return HttpResponseRedirect(reverse('user:profile_create'))

        if request.user.is_authenticated and current_url == 'profile_create' and request.user.is_profile_complete:
            return HttpResponseRedirect('/')
