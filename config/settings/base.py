from pathlib import Path
import django_heroku
import os
####~GENERAL SETTINGS~##################################################################################################
SITE_ID = 1
ALLOWED_HOSTS = ['0.0.0.0', 'volog-test.herokuapp.com']
BASE_DIR = Path(__file__).resolve().parent.parent.parent
SECRET_KEY = "5^*m8iiwt)t2&je0u05b=4_l3ys($fbiu66ez)kk)8ti60#0g'"
WSGI_APPLICATION = 'config.wsgi.application'
ROOT_URLCONF = 'config.urls'
####~LOCALITY & LANGUAGE~###############################################################################################
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True
#####~STATIC FILES SETTINGS~############################################################################################
STATIC_URL = '/static/'
LOGIN_REDIRECT_URL = '/app'
ACCOUNT_AUTHENTICATED_LOGIN_REDIRECTS = True
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'src', 'static'),
)
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"
#####~DJANGO APPS~######################################################################################################
INSTALLED_APPS = [
    # Django Apps
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
    # REST
    'rest_framework',
    # Volog Apps
    'api',
    # authentication modules
    'auth_backend.modules.common',
    'auth_backend.modules.user',
    'auth_backend.modules.superAdmin',
    # allauth modules
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    # allauth google app
    'allauth.socialaccount.providers.google',
]
####~MIDDLEWARE~########################################################################################################
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    "whitenoise.middleware.WhiteNoiseMiddleware",
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'auth_backend.modules.common.middleware.ProfileComplete',
]
#####~AUTH BACKEND SETTINGS~############################################################################################
ACCOUNT_USER_MODEL_USERNAME_FIELD = None
ACCOUNT_USERNAME_REQUIRED = False
ACCOUNT_AUTHENTICATION_METHOD = 'email'
ACCOUNT_EMAIL_REQUIRED = True
AUTH_USER_MODEL = 'user.BaseVologUser'
#####~AUTH PASSWORD SETTINGS~###########################################################################################
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]
#####~TEMPLATE DIRS~####################################################################################################
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'auth_backend', 'templates'), os.path.join(BASE_DIR, 'public')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
#####~DATABASE SETTINGS~################################################################################################
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
#####~REST SETTINGS~####################################################################################################
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 1000
}


django_heroku.settings(locals())
