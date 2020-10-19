from django.views.generic.edit import FormView

from rest_framework import (
    viewsets as rest_viewsets,
    views as rest_views,
    filters as rest_filters,
    permissions as rest_permissions,
    pagination as rest_pagination
)

from auth_backend.modules.common import constants as common_constants
from auth_backend.modules.common.mixins import LoginRequiredMixin, AdminRequiredMixin
from auth_backend.modules.user.models import Referral, User
from auth_backend.modules.user.serializers import UserSerializer

from .forms import ReferralCreateForm
from .admin_permissions import AdminRequired


class CreateReferralView(LoginRequiredMixin, AdminRequiredMixin, FormView):
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


class UserView(rest_viewsets.ModelViewSet):
    """
    User list and detial view
    """
    serializer_class = UserSerializer
    permission_classes = (
        rest_permissions.IsAuthenticated, AdminRequired,
    )
    filter_backends = [
        rest_filters.OrderingFilter,
        rest_filters.SearchFilter
    ]
    search_fields = ('email', 'first_name','school_id')
    pagination_class = rest_pagination.PageNumberPagination
    ordering = ('-created_at',)

    def get_queryset(self):
        role = self.request.GET.get('role')
        query = User.objects.filter(is_profile_complete=True)
        if role == 'student':
            query = query.filter(role=common_constants.ROLE.STUDENT)
        elif role == 'Admin':
            query = query.filter(role=common_constants.ROLE.ADMIN)
        elif role == 'mentor':
            query = query.filter(role=common_constants.ROLE.TEACHER)
        return query

