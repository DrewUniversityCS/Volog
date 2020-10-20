from django.core.management.base import BaseCommand
from django.core import management


class Command(BaseCommand):
    """
    This will register the testing Google Auth application with the database.
    """
    help = "This will register the testing Google Auth application with the database."
    auth_fixture = "dev_social_auth.json"

    def handle(self, *args, **options):
        self._register_auth()

    def _register_auth(self):
        management.call_command("loaddata", self.auth_fixture)
