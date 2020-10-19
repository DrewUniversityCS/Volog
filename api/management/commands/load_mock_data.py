from django.core.management.base import BaseCommand
from django.core import management


class Command(BaseCommand):
    """
    This will register a bunch of mock models so the website behaves as it would normally.
    """

    fixtures = ["test_mentors.json",
                "test_students.json"]

    def handle(self, *args, **options):
        self._load_data()

    def _load_data(self):
        for json_file in self.fixtures:
            management.call_command("loaddata", json_file)
