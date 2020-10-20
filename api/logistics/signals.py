from django.db.models import signals
from django.dispatch import receiver
from api.models import TimeMaster, Student


@receiver(signals.pre_save, sender=Student)
def auto_create_student_timemaster(sender, instance, created, **kwargs):
    """Create TimeMaster for every new Student."""
    if created:
        TimeMaster.objects.create(student=instance)

