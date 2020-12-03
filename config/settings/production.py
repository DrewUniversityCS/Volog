from .base import *

#####~EMAIL SETTINGS~###################################################################################################
EMAIL_BACKEND = "sendgrid_backend.SendgridBackend"
SENDGRID_API_KEY = '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'
SENDGRID_SANDBOX_MODE_IN_DEBUG = False
SENDGRID_ECHO_TO_STDOUT = True
########################################################################################################################
DEBUG = False
X_FRAME_OPTIONS = 'ALLOW-FROM volog-test.herokuapp.com'
