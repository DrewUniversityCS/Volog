from django.core.validators import EmailValidator
from django.db import models

from api.logistics.choice_enums import YEAR_IN_SCHOOL_CHOICES, LEARNING_GOALS_CHOICES, EXPERIENTIAL_LEARNING_HOURS_TYPES
from api.reliability.validators import no_future_dates, hour_instance_validator, minutes_validator


class TimeMaster(models.Model):
    """
    This class is essentially a component for the Student object which holds all the data pertaining to their hours.
    Everything that has to do with time reporting, management and querying happens in this class.
    """

    class Meta:
        db_table = 'hours_data'


class HourInstance(models.Model):
    time_master = models.ForeignKey(TimeMaster, on_delete=models.CASCADE)
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


class AbstractUser(models.Model):
    class Meta:
        abstract = True

    first_name = models.CharField(max_length=60,
                                  blank=False)
    last_name = models.CharField(max_length=60,
                                 blank=False)
    email = models.EmailField(max_length=60,
                              validators=[EmailValidator(message="Enter a valid email address")],
                              blank=False)

    @property
    def full_name(self):
        return self.first_name + ' ' + self.last_name


class Mentor(AbstractUser):
    class Meta:
        db_table = 'mentor_data'

    pass


class Student(AbstractUser):
    class Meta:
        db_table = 'student_data'

    student_id = models.IntegerField(primary_key=True, unique=True, blank=False)
    class_standing = models.CharField(max_length=2, choices=[x.value for x in YEAR_IN_SCHOOL_CHOICES], blank=False)
    DAS_mentor = models.ForeignKey(Mentor, on_delete=models.CASCADE, related_name="mentor",
                                   blank=True, null=True)
    hour_sheet = models.OneToOneField(TimeMaster, on_delete=models.CASCADE,
                                      blank=True, null=True)

    def __str__(self):
        return self.full_name + ', ' + self.class_standing + ' : ' + str(self.student_id)
