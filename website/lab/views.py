from django.shortcuts import render_to_response
from django.template.loader import render_to_string
from django import http
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

import random
import requests
decimal = range(10)

# stdins = StringIO.StringIO(stdout)
import json
def cuponea(request, cupon=False):
    cupones = {
        'tortitas':cuponea_tortitas,
        'telepizza':cuponea_telepizza
    }
    if not cupon:
        return render_to_response('lab/cuponea.jade',context_instance=RequestContext(request,{'cupones':cupones}))
    elif cupon in cupones:
        try:
            back, cupon = cupones[cupon](request)
        except Exception,e :
            back, cupon = True, '<h1>Ha ocurrido un error</h1><span class="desc">%s</span>'%str(e)
        
        if request.is_ajax():
            d = json.dumps({'back':back,'cupon':cupon})
            return http.HttpResponse(d, content_type='application/json')

        return render_to_response('lab/cuponea_detail.jade',context_instance=RequestContext(request,{'back':back,'cupon':cupon}))

class CuponeaException(Exception):pass

def cuponea_tortitas(request):
    template = 'lab/cuponea_tortitas.jade'
    POST = request.method == 'POST'
    if POST:
        email = request.POST['email']
        if not email:
            raise CuponeaException('No has introducido ningun email')
        url = 'http://www.vips.es/tortitas_gratis/enviar_cupon.php'
        fbuid = random.sample(decimal,  9)
        d = {
            'fbuid':''.join([str(i) for i in fbuid]),
            'email':email,
            'aceptacion_bases':'1'
        }
        r = requests.post(url, data=d)
        if r.content.find('img/fondo_resultado1.jpg') == -1:
            raise CuponeaException('Email invalido o ya utilizado')
    return POST, render_to_string(template, context_instance=RequestContext(request,{'back':POST}))

def cuponea_telepizza(request):
    template = 'lab/cuponea_telepizza.jade'
    POST = request.method == 'POST'
    if POST:
        url = 'http://paqueteria.correos.es/concursotelepizza/correos.php'
        email = request.POST['email']
        if not email:
            raise CuponeaException('No has introducido ningun email')
        dni = random.sample(decimal,  8)
        d = {'A_nombre':'Principito',
        'A_apellidos':'Feliz',
        'V_dni':''.join([str(i) for i in dni])+'A',
        'E_email':email,
        'R_acepto':'on'}
        r = requests.post(url, data=d)
        if r.content.find('Invalid address') > -1:
            raise CuponeaException('Email invalido')
        print d,url
        print r.content
    return POST, render_to_string(template, context_instance=RequestContext(request,{'back':POST}))
# Request URL:http://www.vips.es/tortitas_gratis/enviar_cupon.php
# Request Method:POST
# Status Code:200 OK
# Request Headersview source
# Accept:text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
# Accept-Charset:ISO-8859-1,utf-8;q=0.7,*;q=0.3
# Accept-Encoding:gzip,deflate,sdch
# Accept-Language:es-ES,es;q=0.8
# Cache-Control:max-age=0
# Connection:keep-alive
# Content-Length:66
# Content-Type:application/x-www-form-urlencoded
# Cookie:PHPSESSID=240fvgbp0jsgaife458s6l11l5
# Host:www.vips.es
# Origin:http://www.vips.es
# Referer:http://www.vips.es/tortitas_gratis/
# User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.12 Safari/535.11
# Form Dataview URL encoded
# fbuid:718700660
# email:dimension.net@gmail.com
# aceptacion_bases:1