from django.db.models import Sum


def calc_pending(hours):
    pending = hours.filter(approval_status='PENDING').aggregate(Sum('number_of_hours'), Sum('number_of_minutes'))
    pending_hours = pending['number_of_hours__sum'] if pending['number_of_hours__sum'] else 0 + pending[
        'number_of_minutes__sum'] / 60 if pending['number_of_minutes__sum'] else 0
    pending_minutes = pending['number_of_minutes__sum'] % 60 if pending['number_of_minutes__sum'] else 0
    return pending_hours + pending_minutes / 60


def calc_approved(hours):
    approved = hours.filter(approval_status='APPROVED').aggregate(Sum('number_of_hours'), Sum('number_of_minutes'))
    approved_hours = approved['number_of_hours__sum'] if approved['number_of_hours__sum'] else 0 + approved[
        'number_of_minutes__sum'] / 60 if approved['number_of_minutes__sum'] else 0
    approved_minutes = approved['number_of_minutes__sum'] % 60 if approved['number_of_minutes__sum'] else 0
    return approved_hours + approved_minutes / 60
