from django.shortcuts import render_to_response
from django.template import RequestContext

# Create your views here.
import urllib2
from urllib import quote
import re
import xml.dom.minidom
#import md5
import subprocess 
import os
from django.conf import settings
from django.http import HttpResponseRedirect, HttpResponse

songs_dir = os.path.join(settings.ROOT_PATH,'../static/media/lab/colorize/songs/')
def ensure_dir(f):
    d = os.path.dirname(f)
    if not os.path.exists(d):
        os.makedirs(d)
ensure_dir(songs_dir)

from mediagenerator.utils import media_url

def download (s):
	global songs_dir
	f = urllib2.urlopen('http://www.goear.com/search/%s/'%quote(s))
	content = f.read()
	groups = re.search("http:\/\/www.goear.com\/listenwin\.php\?v=([^\s\W]*)",content).groups()
	v = groups[0]
	if not os.path.exists(os.path.join(songs_dir,'%s-no.mp3'%v)):
		f1 = urllib2.urlopen('http://www.goear.com/tracker758.php?f=%s'%v)
		dom = xml.dom.minidom.parseString(f1.read())
		path = dom.documentElement.getElementsByTagName('song')[0].getAttribute('path')
		#md = md5.new(path).hexdigest()

		#'http://www.goear.com/localtrackhost.php?f=7a9fb26'
		p1 = subprocess.Popen('wget %s -O %s'%(path,'%s-no.mp3'%v), cwd=songs_dir,shell=True,stdout=subprocess.PIPE)
		stdout, stderr = p1.communicate()
		os.chmod(os.path.join(songs_dir,'%s-no.mp3'%v),int('777',8))
	if not os.path.exists(os.path.join(songs_dir,'%s.mp3'%v)):
		p2 = subprocess.Popen("/usr/local/bin/lame -V3 %s %s"%(os.path.join(songs_dir,'%s-no.mp3'%v),os.path.join(songs_dir,'%s.mp3'%v)), cwd=songs_dir,shell=True, stdout=subprocess.PIPE)
		stdout, stderr = p2.communicate()
	return v
#download('lady gaga')

#sts = os.waitpid(p1.pid, 0)[1]
# import StringIO

# stdins = StringIO.StringIO(stdout)
def colorize(request,song=False):
    return render_to_response('lab/colorize.html',context_instance=RequestContext(request,{'song':song}))

def colorize_song(request,song):
	d = download(song)
	fsock = open(os.path.join(songs_dir,'%s.mp3'%d))
	response = HttpResponse(fsock, mimetype='audio/mpeg')
	return response
	#url = "http://static.syrusakbary.com/lab/colorize/songs/%s.mp3"%d
	return HttpResponseRedirect(url)
