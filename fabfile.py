from fabric.api import local

def commit():
    local("git add . && git commit")
    
def push():
    local("git push origin master")
