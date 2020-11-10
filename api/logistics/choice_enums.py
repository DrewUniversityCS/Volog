"""
File Name: Choice Enums
Purpose: Essentially a collection of constants, they are further improved by inheriting from an Enum class.
Comments:
"""

from enum import Enum


class ChoiceEnum(Enum):
    """
    To make new field choices, just create a new class that inherits from this one, adding the options are demonstrated
    below.
    To add the choices to a model put this in the choices param:
    [x.value for x in CHOICE_ENUM]
    """

    @classmethod
    def get_value(cls, member):
        return cls[member].value[0]


class YEAR_IN_SCHOOL_CHOICES(ChoiceEnum):
    freshman = ('FR', 'Freshman')
    sophomore = ('SO', 'Sophomore')
    junior = ('JR', 'Junior')
    senior = ('SR', 'Senior')
    graduate = ('GR', 'Graduate')
    post_graduate = ('PG', 'Post Graduate')


class EXPERIENTIAL_LEARNING_HOURS_TYPES(ChoiceEnum):
    required = ('REQ', 'Required')
    active = ('ACT', 'Active (Not Requiring Preapproval)')
    pre_approved = ('PRE', 'Active (Preapproval)')
    receptive = ('REC', 'Receptive')


class LEARNING_GOALS_CHOICES(ChoiceEnum):
    confidence = ('CONFIDENCE',
                  'Gain confidence and skills to identify, define and tackle complex problems that impact communities '
                  'and transcend borders.')
    empathy = ('EMPATHY',
               'Value empathy, understanding and responsiveness to diverse others in their work and public roles.')
    explore = ('EXPLORE',
               'Explore and take action on solutions to real-world problems that fulfill the goals of social impact,'
               ' financial viability, and environmental sustainability.')


class NOTIFICATION_TYPES(ChoiceEnum):
    # For Mentors
    hour_approval_request = ('HA_REQ', 'Request to approve hours for student.')
    # For Students
    hour_confirmation_msg = ('HC_MSG', 'Hour was confirmed by your mentor.')
    hour_denial_msg = ('HD_MSG', 'Hour was denied by your mentor.')
    new_preapproval_hour = ('NP_MSG', 'You have a new pre approved activity.')


class HOURS_APPROVAL_STATUS(ChoiceEnum):
    pending = ('PENDING', 'Hours are pending for approval')
    approved = ('APPROVED', 'Hours reported are approved')
    declined = ('DECLINED', 'Hours reported are declined')
