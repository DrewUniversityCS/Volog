"""
File Name: Listeners
Purpose: Stuff that listen for changes in the backend to respond to it.
Comments:
"""

from auth_backend.modules.common import utilities as common_utils
from django.core.mail import send_mail


def send_invite_mail(sender, instance, created, **kwargs):
    if created:
        # Send Email Here
        # subject = f'You are invited to join as a {instance.get_role_display()}'
        # template = 'emails/superAdmin/user_invite'
        # context = {
        #     'referral_code': instance.code,
        #     'role': instance.get_role_display()
        # }
        # to = instance.email
        # common_utils.send_email(subject, template, context, [to])
        send_mail(
                    f'You are invited to join as a {instance.get_role_display()}',
                    f'Here is the code {instance.code}',
                    'vologdrew@gmail.com',
                    [instance.email],
                    fail_silently=False,
                )