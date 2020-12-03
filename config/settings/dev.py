from .base import *

#####~EMAIL SETTINGS~###################################################################################################
EMAIL_BACKEND = "sgbackend.SendGridBackend"
SENDGRID_API_KEY = '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'
SENDGRID_SANDBOX_MODE_IN_DEBUG=False
SENDGRID_ECHO_TO_STDOUT=True

# SENDGRID_API_KEY = os.getenv('SENDGRID_API_KEY')
# EMAIL_HOST = 'smtp.sendgrid.net'
# EMAIL_HOST_USER = 'apikey'  # this is exactly the value 'apikey'
# EMAIL_HOST_PASSWORD = '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'
# EMAIL_PORT = 587
# EMAIL_USE_TLS = True
# EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
########################################################################################################################
DEBUG = True
X_FRAME_OPTIONS = 'ALLOW-FROM https://127.0.0.1/'
