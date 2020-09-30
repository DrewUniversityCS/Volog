from django.db import models
from django.utils.translation import gettext as _
from django.contrib.auth import models as auth_models

from authentication.constants import ROLE_CHOICES, ROLE
from authentication.utils import generate_referral_code


class TimeStamp(models.Model):
    """ TimeStamp Model """

    created_at = models.DateTimeField(_('created at'), auto_now_add=True)
    updated_at = models.DateTimeField(_('updated at'), auto_now=True)

    class Meta:
        abstract = True


class UserManager(auth_models.BaseUserManager):
    def _create_user(self, email, password, **extra_fields):
        """
        Creates and saves a User with the given email_messages and password.
        """

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
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


class User(auth_models.AbstractBaseUser, auth_models.PermissionsMixin, TimeStamp):
    # TODO: This needs to be integrated with the api user model
    """ User Model for authentication and manage account """

    first_name = models.CharField('First Name', max_length=255)
    last_name = models.CharField('Last Name', max_length=255)
    school_id = models.CharField('Id', max_length=255)
    email = models.EmailField('Email Address', unique=True)
    role = models.SmallIntegerField('Role', choices=ROLE_CHOICES, null=True)
    is_staff = models.BooleanField('Staff status', default=False, help_text='for django reference')
    is_profile_complete = models.BooleanField('Profile Status', default=False)

    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'school_id', 'role']

    objects = UserManager()

    def is_admin(self):
        return self.role == ROLE.ADMIN

    def __str__(self):
        return f'{self.first_name} {self.last_name} - {self.email}'


class Referral(TimeStamp):
    """ Referral model to store referrals """
    code = models.CharField('Referral Code', max_length=255, unique=True, default=generate_referral_code)
    role = models.SmallIntegerField('Role', choices=ROLE_CHOICES, null=True)
    is_used = models.BooleanField('Is Used', help_text='Is referral code used', default=False)

    def __str__(self):
        return f'{self.code} - {self.get_role_display()}'
