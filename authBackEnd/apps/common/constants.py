import collections

ROLE = collections.namedtuple(
    'ROLE', ['ADMIN', 'STUDENT', 'TEACHER']
)(ADMIN=0, STUDENT=1, TEACHER=2)

ROLE_CHOICES = (
    (ROLE.ADMIN, 'Admin',),
    (ROLE.STUDENT, 'Student',),
    (ROLE.TEACHER, 'Teacher',)
)
