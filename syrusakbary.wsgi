import sys, os,  signal
ROOT_PATH = os.path.dirname(__file__)

sys.path.append(ROOT_PATH)
sys.path.append(os.path.join(ROOT_PATH,'website/'))


os.environ['DJANGO_SETTINGS_MODULE'] = 'settings'

import django.core.handlers.wsgi
application = django.core.handlers.wsgi.WSGIHandler()

import monitor
monitor.start(interval=1.0)
