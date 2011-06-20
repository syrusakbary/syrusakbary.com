from __future__ import with_statement
from fabric.api import *
from contextlib import contextmanager as _contextmanager

env.activate = 'source virtualenv/bin/activate'
#
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
    if install_requirements: pipinstall('-r requirements.txt')
    if generate_media: generatemedia()

@hosts('syrus@syrusakbary.com')
def pipinstall(name,upgrade=True):
    with cd('/var/www/vhosts/syrusakbary.com'):
        with virtualenv():
            run('pip install %s %s'%(name,'--upgrade' if upgrade else ''))

@hosts('syrus@syrusakbary.com')
def generatemedia():
    with cd('/var/www/vhosts/syrusakbary.com'):
        with virtualenv():
            run('python manage.py generatemedia')
    with cd('/var/www/vhosts/syrusakbary.com/_generated_media/images/'):
        #run('mogrify -strip *.png')
        run('for file in *.png ; do pngcrush -rem alla -rem gAMA -rem cHRM -rem iCCP -rem sRGB  "$file" "${file%.png}-crushed.png" && mv "${file%.png}-crushed.png" "$file" ; done')
        #run('mogrify -strip *.jpg')
        run('optipng -o5 *.png')