from django.conf.urls.defaults import *
from opensource.views import OpenSourceListView, OpenSourceDetailView

urlpatterns = patterns('opensource.views',
    url(r'^$', OpenSourceListView.as_view(),name='opensource_list'),
    url(r'^(?P<pk>\d+)$', OpenSourceDetailView.as_view(),name='opensource_detail'),
)