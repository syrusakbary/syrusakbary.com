from django.conf.urls.defaults import *
from django.views.generic import TemplateView

import settings
# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()
import os

from website.views import MainView
urlpatterns = patterns('',
    # Example:
    url(r'^$',  MainView.as_view(),name='main'),
    (r'^blog/', include('blog.urls')),
    url(r'^sobremi$',  TemplateView.as_view(template_name='about_me.haml'),name='about_me'),
    (r'^opensource/', include('opensource.urls')),
    url(r'^portfolio/',  TemplateView.as_view(template_name='portfolio.haml'),name='portfolio_list'),
    (r'^lab/', include('lab.urls')),
    #(r'^lab/static/(?P<path>.*)$', 'django.views.static.serve', {'document_root': (os.path.join(settings.ROOT_PATH,'../static/lab/')),'show_indexes': True}),
    # Uncomment the admin/doc line below to enable admin documentation:
    # (r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    (r'^admin/', include(admin.site.urls)),
)

# if settings.DEBUG:
#     urlpatterns += patterns('',
#         (r'^static/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.STATIC_ROOT}),
#         #(r'^static/(?P<path>.*)$', 'django.views.static.serve', {'document_root': '/absolutepath'}),
#     )