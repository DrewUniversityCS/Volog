"""
File Name: Default Migrations
Purpose: Custom command for making a bunch of migrations and running them.
Comments:
"""

from django.core.management.base import BaseCommand
from django.core import management


class Command(BaseCommand):
    """
    This will make a bunch of migrations at once. Makes ya type less - good stuff.
    """

    apps_to_migrate = ['api', 'user']

    def handle(self, *args, **options):
        self._load_data()

    def _load_data(self):
        for app in self.apps_to_migrate:
            management.call_command('makemigrations', app)

        management.call_command('migrate')
