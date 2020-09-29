from django.db import models

YEAR_IN_SCHOOL_CHOICES = [
    ('FR', 'Freshman'),
    ('SO', 'Sophomore'),
    ('JR', 'Junior'),
    ('SR', 'Senior'),
    ('PG', 'Post Graduate'),
    ('GR', 'Graduate')
]

EXPERIENTIAL_LEARNING_HOURS_TYPES = [
    ('REQ', 'Required'),
    ('ACT', 'Active (Not Requiring Preapproval)'),
    ('PRE', 'Active (Preapproval)'),
    ('REC', 'Receptive')
]

LEARNING_GOALS_CHOICES = [
    ('CONFIDENCE', 'Gain confidence and skills to identify, '
                   'define and tackle complex problems that impact communities and transcend borders.'),
    ('EMPATHY', 'Value empathy, understanding and responsiveness to diverse others in their work and public roles.'),
    ('EXPLORE', 'Explore and take action on solutions to real-world problems that fulfill the goals of social impact, '
                'financial viability, and environmental sustainability.')
]


class TimeMaster(models.Model):
    """
    This class is essentially a component for the Student object which holds all the data pertaining to their hours.
    Everything that has to do with time reporting, management and querying happens in this class.
    """

    class Meta:
        db_table = 'hours_data'


class HourInstance(models.Model):
    time_master = models.ForeignKey(TimeMaster, on_delete=models.CASCADE)
    date_of_activity = models.DateField()
    number_of_hours = models.FloatField()
    description_of_activity = models.TextField()
    type_of_hour = models.CharField(max_length=3, choices=YEAR_IN_SCHOOL_CHOICES, blank=False)
    learning_goal = models.CharField(max_length=10, choices=LEARNING_GOALS_CHOICES, blank=False)
    activity_description = models.TextField()


class AbstractUser(models.Model):
    class Meta:
        abstract = True

    first_name = models.CharField(max_length=60, blank=False)
    last_name = models.CharField(max_length=60, blank=False)
    email = models.EmailField(max_length=60, blank=False)

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
    class_standing = models.CharField(max_length=2, choices=YEAR_IN_SCHOOL_CHOICES, blank=False)
    DAS_mentor = models.ForeignKey(Mentor, on_delete=models.CASCADE, blank=True, related_name="mentor")
    hour_sheet = models.OneToOneField(TimeMaster, on_delete=models.CASCADE)

    def __str__(self):
        return self.full_name + ', ' + self.class_standing + ' : ' + str(self.student_id)
