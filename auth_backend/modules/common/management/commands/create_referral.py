"""
File Name: Create Referral
Purpose: Custom command for creating a new referral code from the command line.
Comments:
"""

from django.core.management.base import BaseCommand

from auth_backend.modules.user.models import Referral


class Command(BaseCommand):
    """
    Creates and loads a referral code.
    """
    help = "Creates a referral code."

    def handle(self, *args, **options):
        self._add_referral(options['role'][0])

    def add_arguments(self, parser):
        parser.add_argument('role', nargs='+', type=int)

    def _add_referral(self, role_p):
        r = Referral.objects.create(role=role_p)
        r.save()
        print(r)
