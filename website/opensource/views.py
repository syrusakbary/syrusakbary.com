# Create your views here.
#from django.http import HttpResponse
#from coffin.template import add_to_builtins

#add_to_builtins('jinja2-mediasync.media')

#from coffin.shortcuts import render_to_response
#from django.shortcuts import render_to_response
#from django.template import add_to_builtins
#add_to_builtins('mediasync.templatetags.media')
#from django.template import RequestContext
from django.views.generic import ListView, DetailView
from .models import Project

class OpenSourceDetailView(DetailView):
    template_name='opensource/opensource_detail.haml'
    #queryset = Project.objects.all()
    queryset = []
class OpenSourceListView(ListView):
    template_name='opensource/opensource_list.haml'
    queryset = Project.objects.all()
    context_object_name = "project_list"
    #queryset = []

#def index(request):
#    return render_to_response('projects/index.html',context_instance=RequestContext(request))
    
