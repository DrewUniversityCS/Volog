import uuid


def generate_referral_code():
    # Generate user's referral code
    return uuid.uuid1().__str__()
