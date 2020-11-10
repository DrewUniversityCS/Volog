"""
File Name: Load Mock Data
Purpose: Custom command for loading a bunch of testing data (like fake users and mentors).
Comments:
"""

from django.core import management
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    """
    This will register a bunch of mock models so the website behaves as it would normally.
    """

    fixtures = ["test_students.json", "test_mentors.json", "test_faculty.json"]

    def handle(self, *args, **options):
        self._load_data()

    def _load_data(self):
        for json_file in self.fixtures:
            management.call_command("loaddata", json_file)
