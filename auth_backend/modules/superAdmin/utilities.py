from pandas import read_csv
from django.shortcuts import redirect, reverse
from auth_backend.modules.common import constants as common_constants
from auth_backend.modules.user.models import Referral


def bulk_invite(request):
    if request.method == 'POST':
        file = request.FILES['invites']
        reader = read_csv(file)
        for ind, value in reader.iterrows():
            email = value['email']
            role = value['role']
            if role == 'faculty':
                user_role = common_constants.ROLE.FACULTY
            elif role == 'student':
                user_role = common_constants.ROLE.STUDENT
            else:
                user_role = common_constants.ROLE.MENTOR
            Referral.objects.create(email=email, role=user_role)

    return redirect(reverse('superAdmin:referral'))
