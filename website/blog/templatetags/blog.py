from djinja import template
from django.core.urlresolvers import reverse

register = template.Library()

def tag_url (tag,tags):
    l = tags[:]
    l.remove(tag.slug) if tag.slug in tags else l.append(tag.slug)
    l.sort()
    if len(l)>0:
        return reverse('entrysearch_list',kwargs={'tags':'+'.join(l)})
    else:
        return reverse('blog')
register.tag(tag_url)
