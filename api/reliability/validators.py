from django.core.exceptions import ValidationError
from django.utils.timezone import now


def no_past_dates(date):
    """
    This validator will raise a validation error if the passed in date is in the past.
    :param date: Date Object being validated
    :return: None
    """
    if date < now().date():
        raise ValidationError("Date cannot be in the past")


def no_future_dates(date):
    """
    This validator will raise a validation error if the passed in date is in the future.
    :param date: Date Object being validated
    :return: None
    """
    if date >= now().date():
        raise ValidationError("Date cannot be in the future")


def hour_instance_validator(hour):
    """
    This validator will raise a validation error if the passed hour is (1) negative, or (2) more than 10.
    :param hour: hour integer
    :return: None
    """
    if hour < 0:
        raise ValidationError("Hour submission cannot be negative")
    elif hour > 10:
        raise ValidationError("Your hour submission is too high. Please submit activities separately.")


def minutes_validator(minutes):
    """
    This validator will raise a validation error if the passed minutes are (1) negative or (2) not rounded to the
    nearest 5 minutes .
    :param minutes: minutes integer
    :return: None
    """
    if minutes < 0:
        raise ValidationError("Minutes cannot be negative.")
    elif minutes % 5 != 0:
        raise ValidationError("Please round your minutes to a multiple of 5.")


def student_id_validator(sid):
    """
    This validator will ensure that the provided id number is
    (1) 7 digits long
    (2) Unique in the database
    Otherwise it raises a validation error.
    :param sid: student id being tested
    :return: None
    """
    if len(str(sid)) != 7:
        raise ValidationError("Student ID must be 7 digits long.")
    # TODO: validate key value or, alternatively, establish that it isn't necessary
