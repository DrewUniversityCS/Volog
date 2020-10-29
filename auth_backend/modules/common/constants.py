"""
File Name: Constants
Purpose: Constants this application uses
Comments:
"""

import collections

ROLE = collections.namedtuple(
    'ROLE', ['FACULTY', 'STUDENT', 'MENTOR']
)(FACULTY=0, STUDENT=1, MENTOR=2)

ROLE_CHOICES = (
    (ROLE.FACULTY, 'Faculty',),
    (ROLE.STUDENT, 'Student',),
    (ROLE.MENTOR, 'Mentor',)
)
