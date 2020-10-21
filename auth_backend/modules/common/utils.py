import uuid

from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string as renderer


def generate_referral_code():
    # Generate users referral code
    return uuid.uuid1().__str__()


def send_email(subject, template, context, to):
    """
    method to fill details of the email and user to whom email will be send and send it
    """
    msg = EmailMultiAlternatives(
        subject=subject, body=renderer('{template}.txt'.format(template=template), context),
        from_email=settings.EMAIL_HOST_USER, bcc=to
    )
    msg.attach_alternative(
        renderer(
            '{template}.html'.format(template=template), context
        ),
        "text/html"
    )
    msg.send()
