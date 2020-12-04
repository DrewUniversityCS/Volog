from .base import *

#####~EMAIL SETTINGS~###################################################################################################
EMAIL_BACKEND = "sendgrid_backend.SendgridBackend"
SENDGRID_API_KEY = os.getenv('SENDGRID_KEY')
SENDGRID_SANDBOX_MODE_IN_DEBUG = False
SENDGRID_ECHO_TO_STDOUT = True
########################################################################################################################
DEBUG = False
X_FRAME_OPTIONS = 'ALLOW-FROM volog.herokuapp.com'
