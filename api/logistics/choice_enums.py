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
    post_graduate = ('PG', 'Post Graduate')
    graduate = ('GR', 'Graduate')


class EXPERIENTIAL_LEARNING_HOURS_TYPES(ChoiceEnum):
    required = ('REQ', 'Required')
    active = ('ACT', 'Active (Not Requiring Preapproval')
    pre_approved = ('PRE', 'Active (Preapproval)')
    receptive = ('REC', 'Receptive')


class LEARNING_GOALS_CHOICES(ChoiceEnum):
    confidence = ('CONFIDENCE',
                  'Gain confidence and skills to identify, define and tackle complex problems that impact communities '
                  'and transcend borders.')
    empathy =    ('EMPATHY',
                  'Value empathy, understanding and responsiveness to diverse others in their work and public roles.')
    explore =    ('EXPLORE',
                  'Explore and take action on solutions to real-world problems that fulfill the goals of social impact,'
                  ' financial viability, and environmental sustainability.')
