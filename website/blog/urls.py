from django.conf.urls.defaults import *
from blog.views import EntryListView,EntrySearchListView, EntryDetailView

urlpatterns = patterns('',
    url(r'^$', EntrySearchListView.as_view(),name='blog'),
    url(r'^tag/(?P<tags>.*)$', EntrySearchListView.as_view(),name='entrysearch_list'),
    url(r'^(?P<slug>.*)$', EntryDetailView.as_view(),name='entry_detail'),
)
