from django.conf.urls.defaults import *
from lab.views import colorize, colorize_song
from django.views.generic import TemplateView

urlpatterns = patterns('',
    url(r'^$', TemplateView.as_view(template_name='lab.haml') ,name='lab'),
    url(r'^colorize/$', colorize ,name='colorize'),
    url(r'^colorize/song/(?P<song>.+)/$', colorize_song ,name='colorize_song'),
)
