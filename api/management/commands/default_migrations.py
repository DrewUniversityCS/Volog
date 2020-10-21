from django.core.management.base import BaseCommand
from django.core import management


class Command(BaseCommand):
    """
    This will make a bunch of migrations at once. Makes ya type less - good stuff.
    """

    def handle(self, *args, **options):
        self._load_data()

    def _load_data(self):
        management.call_command('makemigrations', 'api')
        management.call_command('makemigrations', 'user')
