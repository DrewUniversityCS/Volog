"""
File Name: Load Initial Data
Purpose: Command for loading necessary fixtures (not mock data, but staff needed for the website to function as usual)
Comments:
"""

from django.core.management.base import BaseCommand
from django.core import management


class Command(BaseCommand):
    """
    Loads necessary fixtures
    """

    fixtures = ["activity_categories.json"]

    def handle(self, *args, **options):
        self._load_data()

    def _load_data(self):
        for json_file in self.fixtures:
            management.call_command("loaddata", json_file)
