"""
File Name: Models
Purpose: Contains the database level representations (models) of the objects the API interacts with and manages.
Comments:
"""

from django.db import models

from api.logistics.choice_enums import YEAR_IN_SCHOOL_CHOICES, LEARNING_GOALS_CHOICES, EXPERIENTIAL_LEARNING_HOURS_TYPES
from api.reliability.validators import no_future_dates, hour_instance_validator, minutes_validator, student_id_validator
from auth_backend.modules.common import models as common_models


class Mentor(models.Model):
    """
    Represents a DAS mentor.
    """
    user = models.ForeignKey("user.BaseVologUser", on_delete=models.CASCADE, blank=False, null=False)
    def __str__(self):
        return self.user.full_name

class Student(models.Model):
    """
    Represents a Student user.
    """
    user = models.ForeignKey("user.BaseVologUser", on_delete=models.CASCADE, blank=False, null=False)
    student_id = models.IntegerField(unique=True, validators=[student_id_validator],
                                     blank=False, null=True)
    class_standing = models.CharField(max_length=2, choices=[x.value for x in YEAR_IN_SCHOOL_CHOICES],
                                      blank=False, null=True)
    DAS_mentor = models.ForeignKey(Mentor, on_delete=models.CASCADE, related_name="mentor",
                                   blank=True, null=True)

    def __str__(self):
        return self.user.full_name + ', ' + self.class_standing + ' : ' + str(self.student_id)


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
    type_of_hour = models.CharField(max_length=3, choices=[x.value for x in EXPERIENTIAL_LEARNING_HOURS_TYPES],
                                    blank=False, null=False)
    learning_goal = models.CharField(max_length=10, choices=[x.value for x in LEARNING_GOALS_CHOICES],
                                     blank=False, null=False)
    activity_description = models.TextField(blank=True, null=True)
    approved = models.BooleanField(default=False, null=False)


class Group(common_models.TimeStamp):

    """ Group Model """

    name = models.CharField('Group name', max_length=256)
    mentor = models.OneToOneField(Mentor, on_delete=models.CASCADE)
    students = models.ManyToManyField(Student, through='StudentGroup')

    def __str__(self):
        return f'{self.name} - {self.mentor}'


class StudentGroup(common_models.TimeStamp):

    """ StudentGroup Model to store Students and group """
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('group', 'student',)

    def __str__(self):
        return f'{self.group} {self.student}'
