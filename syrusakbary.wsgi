import sys, os,  signal
ROOT_PATH = os.path.dirname(__file__)

sys.path.append(ROOT_PATH)
sys.path.append(os.path.join(ROOT_PATH,'website/'))

#root_path = '/var/www/virtualenvs/syrusakbary.com/'
#activate_this = os.path.join(root_path, "bin/activate_this.py")
#execfile(activate_this, dict(__file__=activate_this))

os.environ['DJANGO_SETTINGS_MODULE'] = 'settings'

import django.core.handlers.wsgi
application = django.core.handlers.wsgi.WSGIHandler()

from apache2 import monitor
monitor.start(interval=1.0)
