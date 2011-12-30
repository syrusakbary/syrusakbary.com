from django.conf.urls.defaults import *
from lab.views import colorize, colorize_song, cuponea, cuponea_tortitas
from django.views.generic import TemplateView

urlpatterns = patterns('',
    url(r'^$', TemplateView.as_view(template_name='lab.jade') ,name='lab'),
    url(r'^cuponea/(?P<cupon>[^/]*)$', cuponea,name='cuponea'),
    url(r'^colorize/(?P<song>[^/]*)$', colorize ,name='colorize'),
    url(r'^colorize/(?P<song>.+)/download$', colorize_song ,name='colorize_song'),
)
