#!/usr/bin/env python
# from django.core.management import execute_manager
# import imp
# try:
#     imp.find_module('website.settings') # Assumed to be in the same directory.
# except ImportError:
#     import sys
#     sys.stderr.write("Error: Can't find the file 'settings.py' in the directory containing %r. It appears you've customized things.\nYou'll have to run django-admin.py, passing it your settings module.\n" % __file__)
#     sys.exit(1)
# 
# from website import settings
# 
# if __name__ == "__main__":
#     execute_manager(settings)

import os
import sys



ROOT_PATH = os.path.dirname(__file__)

sys.path.append(ROOT_PATH)
sys.path.append(os.path.join(ROOT_PATH,'website/'))

import website.settings as settings
from django.core.management import execute_manager

execute_manager(settings)

# import os
# import sys
# 
# ROOT_PATH = os.path.dirname(__file__)
# sys.path.append(os.path.join(ROOT_PATH,'../'),)
# 
# from django.core.management import execute_manager
# try:
#     import settings # Assumed to be in the same directory.
# except ImportError:
#     import sys
#     sys.stderr.write("Error: Can't find the file 'settings.py' in the directory containing %r. It appears you've customized things.\nYou'll have to run django-admin.py, passing it your settings module.\n(If the file settings.py does indeed exist, it's causing an ImportError somehow.)\n" % __file__)
#     sys.exit(1)
# 
# if __name__ == "__main__":
#     execute_manager(settings)
