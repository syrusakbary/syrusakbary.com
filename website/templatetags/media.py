from djinja import template
#from django.core import urlresolvers
from django.core.urlresolvers import reverse

import jinja2
register = template.Library()
@jinja2.contextfunction
def active (context,urls):
    #raise Exception(context)
    if context['request_path'] in ( reverse(url) for url in urls.split() ):
        return True
    return False
    
register.tag(active)




from mediasync.templatetags.media import MediaUrlTagNode,CssTagNode,JsTagNode
from djinja.template.loaders import make_jinja2_tag

register.tag(make_jinja2_tag(MediaUrlTagNode),name='media_url')
register.tag(make_jinja2_tag(CssTagNode),name='css')
register.tag(make_jinja2_tag(JsTagNode),name='js')