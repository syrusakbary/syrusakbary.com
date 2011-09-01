===============
SyrusAkbary.com
===============

Este repositorio es una copia exacta de mi web personal http://syrusakbary.com

Instalaci—n
===========
Para correr la web tu propio servidor tienes que seguir estos pasos:

#. Descargar el repositorio::

	git clone https://SyrusAkbary@github.com/SyrusAkbary/syrusakbary.com.git
	cd syrusakbary.com

#. Instalar pip en el caso de no tenerlo instalado::

	easy_install pip

#. Instalar los requerimientos de la p‡gina::

	pip install -r requirements.pip

#. Crear el archivo local_settings.py en la carpeta website, para definir las variables de entorno (BBDD). Ejemplo::

	from settings import INSTALLED_APPS, ROOT_PATH
	import os


	DATABASES = {
	    'default': {
	        'ENGINE': 'django.db.backends.mysql', # Add 'postgresql_psycopg2', 'postgresql', 'mysql', 'sqlite3' or 'oracle'.
	        'NAME': '{Nombre de la Base de Datos}',                      # Or path to database file if using sqlite3.
	        'USER': '{Usuario}',                      # Not used with sqlite3.
	        'PASSWORD': '{Contraseña',                  # Not used with sqlite3.
	        'HOST': '',                      # Set to empty string for localhost. Not used with sqlite3.
	        'PORT': '',                      # Set to empty string for default. Not used with sqlite3.
	    },
	}

	INSTALLED_APPS = INSTALLED_APPS+('haystack',)
	HAYSTACK_CONNECTIONS = {
	    'default': {
	        # For Xapian (requires the third-party install):
	        'ENGINE': 'xapian_backend.XapianEngine',
	        'PATH': os.path.join(ROOT_PATH, 'xapian_index'),
	    }
	}

	MEDIA_DEV_MODE = True

#. Generar los archivos js y css::

	python manage.py generatemedia

#. Ejecutar el servidor::

	python manage.py runserver

Y ya tendr‡s la p‡gina completamente funcional en tu ordenador.