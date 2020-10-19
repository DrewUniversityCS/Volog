from django.core.management.base import BaseCommand
from django.core import management


class Command(BaseCommand):
    """
    Adds a referral code for creating a testing account.
    """
    help = "Adds a referral code for creating a testing account."
    referral_fixture = "testing_referral_code.json"

    def handle(self, *args, **options):
        self._add_referral()
        print("The testing referral code is 00000000-0000-0000-0000-000000000000")

    def _add_referral(self):
        management.call_command("loaddata", self.referral_fixture)
