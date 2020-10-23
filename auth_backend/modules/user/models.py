"""
File Name: Models
Purpose: Database models this application uses.
Comments:
"""

from django.contrib.auth import models as auth_models
from django.core.validators import EmailValidator
from django.db import models
from django.db.models.signals import post_save

from api.models import Student, Mentor
from auth_backend.modules.common import (
    constants as common_constants,
    models as common_models,
    utilities as common_utils
)
from auth_backend.modules.user.listeners import send_invite_mail


class UserManager(auth_models.BaseUserManager):
    def _create_user(self, email, password, **extra_fields):
        """
        Creates and saves a User with the given email and password.
        """

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        role = extra_fields.get('role')

        # The if statements below check what the user's selected role is and creates
        # a corresponding database entry if necessary.
        if role == 0:  # Faculty
            pass
        elif role == 1:  # Student
            sid = extra_fields.get('student_id')
            cl_stand = extra_fields.get('class_standing')
            mentor = extra_fields.get('mentor')
            student = Student.objects.create(student_id=sid, class_standing=cl_stand, DAS_mentor=mentor, user=user)
            student.save(using=self._db)
        elif role == 2:  # Mentor
            mentor = Mentor.objects.create(user=user)
            mentor.save(using=self._db)
        return user

    def create(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')

        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)


class BaseVologUser(auth_models.AbstractBaseUser, auth_models.PermissionsMixin, common_models.TimeStamp):
    """
    Abstract user type that shares information common to all user types.
    """

    first_name = models.CharField(max_length=60,
                                  blank=False)
    last_name = models.CharField(max_length=60,
                                 blank=False)
    email = models.EmailField(max_length=60,
                              validators=[EmailValidator(message="Enter a valid email address")],
                              blank=False,
                              unique=True)

    role = models.SmallIntegerField('Role', choices=common_constants.ROLE_CHOICES, default=1,
                                    blank=False, null=False)
    is_staff = models.BooleanField('Staff status', default=False, help_text='for django reference')
    is_profile_complete = models.BooleanField('Profile Status', default=False, blank=False, null=False)

    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'role']

    objects = UserManager()

    @property
    def full_name(self):
        return self.first_name + ' ' + self.last_name

    @property
    def is_admin(self):
        return self.role == common_constants.ROLE.FACULTY

    def __str__(self):
        return f'{self.first_name} {self.last_name} - {self.email}'


class Referral(common_models.TimeStamp):
    """ Referral model to store Referral codes """
    email = models.EmailField('Email Address')
    code = models.CharField('Referral Code', max_length=255, unique=True, default=common_utils.generate_referral_code)
    role = models.SmallIntegerField('Role', choices=common_constants.ROLE_CHOICES, null=False)
    is_used = models.BooleanField('Is Used', help_text='Is referral code used', default=False, blank=False, null=False)

    def __str__(self):
        return f'{self.code} - {self.get_role_display()}'


post_save.connect(send_invite_mail, sender=Referral)
