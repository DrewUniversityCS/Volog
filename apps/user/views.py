from .forms import ProfileForm
from django.views.generic.edit import FormView


class ProfileCreateView(FormView):
    template_name = 'user/profile_create.html'
    form_class = ProfileForm
    success_url = '/'

    def form_valid(self, form):
        print('Ran form valid')
        print(form.cleaned_data)
        form.save()
        self.request.user.is_profile_complete = True
        self.request.user.save()
        return super().form_valid(form)

    def get_form_kwargs(self):
        form_kwargs = super().get_form_kwargs()
        form_kwargs['instance'] = self.request.user
        return form_kwargs
