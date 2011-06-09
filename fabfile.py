from __future__ import with_statement
from fabric.api import *
from contextlib import contextmanager as _contextmanager

env.activate = 'source virtualenv/bin/activate'

def commit():
    local("git add . && git commit")
    
def push():
    local("git push origin master")
            

@_contextmanager
def virtualenv():
    with prefix(env.activate):
        yield
            
@hosts('syrus@syrusakbary.com')
def update(install_requirements=False,generate_media=True):
    commit()
    push()
    with cd('/var/www/vhosts/syrusakbary.com'):
        run('git pull')
        with virtualenv():
            if install_requirements: run('pip install -r requirements.txt')
            if generate_media: run('python manage.py generatemedia')

@hosts('syrus@syrusakbary.com')
def optimize_images():
    with cd('/var/www/vhosts/syrusakbary.com/_generated_media/images/'):
        run('mogrify -strip *.png')
        run('mogrify -strip *.jpg')
        run('optipng -o5 *.png')