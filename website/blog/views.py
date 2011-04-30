# Create your views here.
#from django.http import HttpResponse
#from coffin.template import add_to_builtins

#add_to_builtins('jinja2-mediasync.media')

#from coffin.shortcuts import render_to_response
from django.shortcuts import render_to_response
#from django.template import add_to_builtins
#add_to_builtins('mediasync.templatetags.media')
from django.template import RequestContext

def explore(request):
    return render_to_response('blog/explore.haml',context_instance=RequestContext(request))
    
