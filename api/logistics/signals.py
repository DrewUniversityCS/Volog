from django.db.models import signals

from api.models import TimeMaster, Student


def init_student_timesheet(sender, instance, created, **kwargs):
    """Create TimeMaster for every new Student."""
    if created:
        TimeMaster.objects.create(student=instance)


signals.post_save.connect(init_student_timesheet, sender=Student, weak=False,
                          dispatch_uid='models.init_student_timesheet')
