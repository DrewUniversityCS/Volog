from django.db import models
from api.logistics.choice_enums import YEAR_IN_SCHOOL_CHOICES, LEARNING_GOALS_CHOICES, EXPERIENTIAL_LEARNING_HOURS_TYPES
from api.reliability.validators import no_future_dates, hour_instance_validator, minutes_validator, student_id_validator

from auth_backend.modules.common import models as common_models
from auth_backend.modules.user.models import BaseVologUser


class Mentor(models.Model):
    #I added the foreign key as we have two users, student and mentor. Foreign key is used to distigush which user is which. 
    """
    Represents a DAS mentor.
    """
    user = models.OneToOneField(BaseVologUser, on_delete=models.CASCADE)

   # pass



class Student(models.Model):
    """
    Represents a Student user.
    """
    student_id = models.IntegerField(primary_key=True, unique=True, validators=[student_id_validator], blank=False)
    class_standing = models.CharField(max_length=2, choices=[x.value for x in YEAR_IN_SCHOOL_CHOICES], blank=False)
    DAS_mentor = models.ForeignKey(Mentor, on_delete=models.CASCADE, related_name="mentor",
                                   blank=True, null=True)
    user = models.OneToOneField(BaseVologUser, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.full_name + ', ' + self.class_standing + ' : ' + str(self.student_id)


class TimeMaster(models.Model):
    """
    This class is essentially a component for the Student object which holds all the data pertaining to their hours.
    Everything that has to do with time reporting, management and querying happens in this class.
    """
    student = models.OneToOneField(Student, on_delete=models.CASCADE, auto_created=True, related_name='student')
    percent_complete = models.FloatField(blank=False, null=False, default=0.0)


class HourInstance(common_models.TimeStamp):
    """
    An instance of a single hour submission. Connected to its related student through the time master foreign key.
    """
    time_master = models.ForeignKey(TimeMaster, on_delete=models.CASCADE, related_name="hours")
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

