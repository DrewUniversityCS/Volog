from django.db import models
from api.logistics.choice_enums import YEAR_IN_SCHOOL_CHOICES, LEARNING_GOALS_CHOICES, EXPERIENTIAL_LEARNING_HOURS_TYPES
from api.reliability.validators import no_future_dates, hour_instance_validator, minutes_validator, student_id_validator

from auth_backend.modules.common import models as common_models
from auth_backend.modules.user.models import BaseVologUser


class Mentor(BaseVologUser):
    """
    Represents a DAS mentor.
    """
    pass


class Student(BaseVologUser):
    """
    Represents a Student user.
    """
    student_id = models.IntegerField(primary_key=True, unique=True, validators=[student_id_validator], blank=False)
    class_standing = models.CharField(max_length=2, choices=[x.value for x in YEAR_IN_SCHOOL_CHOICES], blank=False)
    DAS_mentor = models.ForeignKey(Mentor, on_delete=models.CASCADE, related_name="mentor",
                                   blank=True, null=True)

    def __str__(self):
        return self.full_name + ', ' + self.class_standing + ' : ' + str(self.student_id)


class HourInstance(common_models.TimeStamp):
    """
    An instance of a single hour submission. Connected to its related student with a foreign key.
    """
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    date_of_activity = models.DateField(validators=[no_future_dates],
                                        blank=False, null=False)
    number_of_hours = models.IntegerField(validators=[hour_instance_validator],
                                          blank=False, null=False)
    number_of_minutes = models.IntegerField(validators=[minutes_validator],
                                            blank=True, null=True)
    description_of_activity = models.TextField(blank=True, null=True)
    type_of_hour = models.CharField(max_length=3, choices=[x.value for x in EXPERIENTIAL_LEARNING_HOURS_TYPES],
                                    blank=False, null=False)
    learning_goal = models.CharField(max_length=10, choices=[x.value for x in LEARNING_GOALS_CHOICES],
                                     blank=False, null=False)
    activity_description = models.TextField(blank=True, null=True)

