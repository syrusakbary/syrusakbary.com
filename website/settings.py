# Django settings for exercita project.
import os

ROOT_PATH = os.path.dirname(__file__)

DEBUG = True
TEMPLATE_DEBUG = DEBUG

ADMINS = (
    # ('Your Name', 'your_email@example.com'),
)

MANAGERS = ADMINS

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.',    # Add 'postgresql_psycopg2', 'postgresql', 'mysql', 'sqlite3' or 'oracle'.
        'NAME': 'syrusakbary',                      # Or path to database file if using sqlite3.
        'USER': 'root',                      # Not used with sqlite3.
        'PASSWORD': '',                  # Not used with sqlite3.
        'HOST': '',                      # Set to empty string for localhost. Not used with sqlite3.
        'PORT': '',                      # Set to empty string for default. Not used with sqlite3.
    },
}

# Local time zone for this installation. Choices can be found here:
# http://en.wikipedia.org/wiki/List_of_tz_zones_by_name
# although not all choices may be available on all operating systems.
# On Unix systems, a value of None will cause Django to use the same
# timezone as the operating system.
# If running in a Windows environment this must be set to the same as your
# system time zone.
TIME_ZONE = 'Europe/Madrid'

# Language code for this installation. All choices can be found here:
# http://www.i18nguy.com/unicode/language-identifiers.html
LANGUAGE_CODE = 'es-es'

SITE_ID = 1

# If you set this to False, Django will make some optimizations so as not
# to load the internationalization machinery.
USE_I18N = True

# If you set this to False, Django will not format dates, numbers and
# calendars according to the current locale
USE_L10N = True

# Absolute filesystem path to the directory that will hold user-uploaded files.
# Example: "/home/media/media.lawrence.com/media/"
MEDIA_ROOT = ''

# URL that handles the media served from MEDIA_ROOT. Make sure to use a
# trailing slash if there is a path component (optional in other cases).
# Examples: "http://media.lawrence.com/media/", "http://example.com/media/"

MEDIA_URL = '/static/media/'

# Absolute path to the directory that holds static files.
# Example: "/home/media/media.lawrence.com/static/"


STATIC_ROOT = os.path.join(ROOT_PATH,'../static/media/')

# URL that handles the static files served from STATIC_ROOT.
# Example: "http://media.lawrence.com/static/"
STATIC_URL = '/static/'

# URL prefix for admin media -- CSS, JavaScript and images.
# Make sure to use a trailing slash.
# Examples: "http://foo.com/static/admin/", "/static/admin/".
ADMIN_MEDIA_PREFIX = '/static-admin/'

#ADMIN_MEDIA_PREFIX = 'http://static.exercita.local/admin/'
# A list of locations of additional static files
STATICFILES_DIRS = (os.path.join(ROOT_PATH,'/static/'))

# List of finder classes that know how to find static files in
# various locations.
STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
#    'django.contrib.staticfiles.finders.DefaultStorageFinder',
)

# Make this unique, and don't share it with anybody.
SECRET_KEY = 'qdz5wj39hb-)tdxfg%cg1r_4c%*^!a559k1mx6de-=#vj^97cu'

# List of callables that know how to import templates from various sources.
TEMPLATE_LOADERS = (
    'djinja.template.loaders.Loader',
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
    #'django.template.loaders.app_directories.load_template_source',
#     'django.template.loaders.eggs.Loader',
)

TEMPLATE_CONTEXT_PROCESSORS = (
    'django.contrib.auth.context_processors.auth',
    'djinja.utilities.context_processors.request_path',
)

MIDDLEWARE_CLASSES = (
    'django.middleware.common.CommonMiddleware',
    'mediagenerator.middleware.MediaMiddleware',
    #'debug_toolbar.middleware.DebugToolbarMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
)

ROOT_URLCONF = 'urls'

TEMPLATE_DIRS = (
    # Put strings here, like "/home/html/django_templates" or "C:/www/django/templates".
    # Always use forward slashes, even on Windows.
    # Don't forget to use absolute paths, not relative paths.
    os.path.join(ROOT_PATH,'templates'),
    #os.path.join(ROOT_PATH,'main/templates'),
    #os.path.join(ROOT_PATH,'blog/templates'),
)
INTERNAL_IPS = ('127.0.0.1',)

INSTALLED_APPS = (
    'blog',
    'opensource',
    #'jinja2',
    #'coffin',
    'website',
    #'mediasync',
    #'apache2',
    #'coffin.contrib.markup',
    'mediagenerator',
    'taggit',
    'djinja.utilities',
    #'djinja.contrib.admin',
    'djinja.contrib.debug_toolbar',
    'debug_toolbar',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    #'django.contrib.staticfiles',
    # Uncomment the next line to enable the admin:
    'djinja.contrib.admin',
    'django.contrib.admin',
    # Uncomment the next line to enable admin documentation:
    # 'django.contrib.admindocs',
#    'gunicorn',
)

# A sample logging configuration. The only tangible logging
# performed by this configuration is to send an email to
# the site admins on every HTTP 500 error.
# See http://docs.djangoproject.com/en/dev/topics/logging for
# more details on how to customize your logging configuration.
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'mail_admins': {
            'level': 'ERROR',
            'class': 'django.utils.log.AdminEmailHandler'
        }
    },
    'loggers': {
        'django.request':{
            'handlers': ['mail_admins'],
            'level': 'ERROR',
            'propagate': True,
        },
    }
}

# MEDIASYNC = {
#     'BACKEND': 'mediasync.backends.s3',
#     'AWS_KEY': "s3_key",
#     'AWS_SECRET': "s3_secret",
#     'AWS_BUCKET': "bucket_name",
#     'JOINED': {
#         'css/all.css': ['css/960.css','css/reset.css','css/text.css','css/fonts.css','css/main.css','css/aboutme.css','css/header.css','css/footer.css','css/blog.css','css/project.css','css/contact.css'],
#         #'js/tooltip.js': ['js/jquery.tooltip.js','js/jquery.tooltip.slide.js','js/jquery.tooltip.dynamic.js'],
#         'js/main.js': ['js/jquery.transform.js' ,'js/jquery.effects.core.js','js/pages.main.js'],
#         'js/page.js': ['js/jquery.tweet.js'],
#     },
# }

MEDIA_BUNDLES = (
    ('css/all.css',
        'css/960.css',
        'css/reset.css',
        'css/text.css',
        'css/fonts.css',
        'css/main.css',
        'css/aboutme.css',
        'css/header.css',
        'css/footer.css',
        'css/blog.css',
        'css/project.css',
        'css/contact.css'
    ),
    ('css/new.css','css/new.css'),
    ('js/main.js',
        'js/jquery.transform.js',
        'js/jquery.tweet.js',
        'js/jquery.effects.core.js',
        'js/pages.main.js'
    ),
    #('js/page.js',
    #    'js/jquery.tweet.js'
    #),
)

GLOBAL_MEDIA_DIRS = (
    os.path.join(ROOT_PATH,'../static/media'),
)


MEDIA_DEV_MODE = True
DEV_MEDIA_URL = '/devmedia/'
PRODUCTION_MEDIA_URL = '/media/'

YUICOMPRESSOR_PATH = os.path.join(
    ROOT_PATH, '../yuicompressor-2.4.6.jar')
if os.path.exists(YUICOMPRESSOR_PATH):
    ROOT_MEDIA_FILTERS = {
        'js': 'mediagenerator.filters.yuicompressor.YUICompressor',
        'css': 'mediagenerator.filters.yuicompressor.YUICompressor',
    }

JINJA2_ENVIRONMENT_OPTIONS = {
    'autoescape': False,
}
JINJA2_EXTENSIONS = (
    'jinja2.ext.autoescape',
    'djinja.template.extensions.haml',
    'mediagenerator.contrib.jinja2ext.MediaExtension'
)

SPRITIZE = {
    'BACKEND': 'spritize.backends.basic',
    'SPRITES': {
        'css/sprites.css': ['images/sprite1.png']
    }
}

try:
    from local_settings import *
except ImportError, e:
    print 'Unable to load local_settings.py:', e
