from __future__ import with_statement
from fabric.api import *
from fabric.contrib.console import confirm
from contextlib import contextmanager as _contextmanager

env.activate = 'source virtualenv/bin/activate'
#
def commit():
    local("git add . && git commit")
    
def push():
    local("git push origin master")
            
def createfixtures(*args):
    for app in args:
        local('mkdir -p website/%(app)s/fixtures/'%{'app':app})
        local("python manage.py dumpdata %(app)s > website/%(app)s/fixtures/initial_data.json"%{'app':app})

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
    if install_requirements: pipinstall('-r requirements.pip')
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
            run('cp static/media/css/PIE.htc _generated_media/css/')
    with cd('/var/www/vhosts/syrusakbary.com/_generated_media/images/'):
        #run('mogrify -strip *.png')
        run('for file in *.png ; do pngcrush -rem alla -rem gAMA -rem cHRM -rem iCCP -rem sRGB  "$file" "${file%.png}-crushed.png" && mv "${file%.png}-crushed.png" "$file" ; done')
        #run('mogrify -strip *.jpg')
        run('optipng -o5 *.png')
    with cd('/var/www/vhosts/syrusakbary.com/_generated_media/projects/'):
        run('for file in *.png ; do pngcrush -rem alla -rem gAMA -rem cHRM -rem iCCP -rem sRGB  "$file" "${file%.png}-crushed.png" && mv "${file%.png}-crushed.png" "$file" ; done')
        run('optipng -o5 *.png')

from fabric.contrib.project import rsync_project

def migrate(apps=['blog']):
    with settings(warn_only=True):
        for app in apps:
            result = run('./manage.py schemamigration %s --auto'%app)
            if not result.failed or confirm("Migracion fallida, continuar?"):
                run('./manage.py migrate %s'%app)

@hosts('syrus@syrusakbary.com')
def sync():
    gitignore = file('.gitignore')
    excludes = [line.strip() for line in gitignore.readlines()]
    excludes.append('.git/*')
    rsync_project("/var/www/vhosts/syrusakbary.com", "./",exclude=excludes)
    
    #with cd('/var/www/vhosts/syrusakbary.com'):
    #    with virtualenv():
    #        run('./manage.py syncdb')
    #        migrate()