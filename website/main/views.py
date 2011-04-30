from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.template import RequestContext
#from coffin.template import add_to_builtins
#from django.template import add_to_builtins

#add_to_builtins('jinja2-mediasync.media')

#from coffin.shortcuts import render_to_response
#from django.template import add_to_builtins
#add_to_builtins('mediasync.templatetags.media')
def main(request):
    return render_to_response('main.html',context_instance=RequestContext(request))
    
