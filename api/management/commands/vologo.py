"""
File Name: Vologo
Purpose: Custom command for getting the server ready when first cloning it / after deleting the database.
Comments:
"""

from django.core import management
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    """
    Handy command for getting the server ready to do development on.
    """

    def handle(self, *args, **options):
        self.vologo()

    def vologo(self):
        management.call_command("default_migrations")
        management.call_command("register_dev_social_auth")
        management.call_command("load_mock_data")
        management.call_command("load_initial_data")
