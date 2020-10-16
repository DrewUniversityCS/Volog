from django.shortcuts import redirect, reverse


class LoginRequiredMixin(object):
    """
    Mixin to validate Login is required
    """
    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            return redirect(reverse('account_login'))
        return super().dispatch(request, *args, **kwargs)


class AdminRequiredMixin(object):
    """
    Mixin to validate only Admin role is required
    """
    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_admin():
            return redirect('/')
        return super().dispatch(request, *args, **kwargs)

