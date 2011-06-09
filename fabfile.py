from fabric.api import local,run, hosts, env, cd

def commit():
    local("git add . && git commit")
    
def push():
    local("git push origin master")

@hosts('syrus@syrusakbary.com')
def update(install_requirements=True):
    with cd('/var/www/vhosts/syrusakbary.com'):
        run('ls')
        if install_requirements: run('pip install -r requirements.txt')