import uuid


def generate_referral_code():
    # Generate users referral code
    return uuid.uuid1().__str__()
