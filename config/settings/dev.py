from .base import *

#####~EMAIL SETTINGS~###################################################################################################
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'VologDrew@gmail.com'
EMAIL_HOST_PASSWORD = os.getenv('EMAIL_PASS')
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
########################################################################################################################
DEBUG = True
X_FRAME_OPTIONS = 'ALLOW-FROM https://127.0.0.1/'
