from django.db import models

# Create your models here.


class Student(models.Model):
    name = models.CharField(max_length=60)
    email = models.EmailField(max_length=60)
    student_id = models.CharField(max_length=8)

    def __str__(self):
        return self.name
