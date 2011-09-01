from djinja import template

register = template.Library()
from mediagenerator import utils

register.tag(utils.media_url,name='media_url')