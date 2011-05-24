from django.conf.urls.defaults import *
from projects.views import ProjectListView, ProjectDetailView

urlpatterns = patterns('projects.views',
    url(r'^$', ProjectListView.as_view(),name='project_list'),
    url(r'^(?P<pk>\d+)$', ProjectDetailView.as_view(),name='project_detail'),
)