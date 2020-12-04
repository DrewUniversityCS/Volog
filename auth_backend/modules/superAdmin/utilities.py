import codecs
import csv

from django.shortcuts import redirect, reverse

from auth_backend.modules.common import constants as common_constants
from auth_backend.modules.user.models import Referral


def bulk_invite(request):
    if request.method == 'POST':
        param_file = request.FILES['invites']
        read = csv.DictReader(codecs.iterdecode(param_file, 'utf-8'))
        for row in read:
            email = row['email']
            role = row['role']
            if role == 'faculty':
                user_role = common_constants.ROLE.FACULTY
            elif role == 'student':
                user_role = common_constants.ROLE.STUDENT
            else:
                user_role = common_constants.ROLE.MENTOR
            Referral.objects.create(email=email, role=user_role)

    return redirect(reverse('superAdmin:referral'))
