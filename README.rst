===============
SyrusAkbary.com
===============

Este repositorio es una copia exacta de mi web personal http://syrusakbary.com

Instalaci—n
===========
Para correr la web tu propio servidor tienes que seguir estos pasos:

#. Instalar pip en el caso de no tenerlo instalado::

	easy_install pip

#. Instalar los requerimientos de la p‡gina::

	pip install -r requirements.txt

#. Generar los archivos js y css::

	python manage.py generatemedia

#. Ejecutar el servidor::

	python manage.py runserver
