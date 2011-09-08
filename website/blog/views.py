# Create your views here.
#from django.http import HttpResponse
#from coffin.template import add_to_builtins

#add_to_builtins('jinja2-mediasync.media')

#from coffin.shortcuts import render_to_response
from django.shortcuts import render_to_response
#from django.template import add_to_builtins
#add_to_builtins('mediasync.templatetags.media')
from django.template import RequestContext
from django.shortcuts import get_object_or_404
from django.views.generic import ListView, DetailView
from blog.models import Entry

try:
    from haystack.query import SearchQuerySet, SQ
except:
    print "Haystack No encontrado"

def explore(request):
    return render_to_response('blog/explore.haml',context_instance=RequestContext(request))

class Blog:
    sqs = None
    def inflate_context (self,context):
        try:
            sqs = SearchQuerySet() if self.sqs is None else self.sqs
            facet_tags = dict(sqs.facet('tag').facet_counts()['fields']['tag'])
            entry_tags = Entry.tags.filter(slug__in=facet_tags.keys())
        except:
            entry_tags = Entry.tags.all()
        context['search'] = {
            'query':getattr(self,'query',''), 
            'tags':getattr(self,'tags',[]) 
        }

        context['tags'] = entry_tags


class EntryListView(ListView):

    context_object_name = "entry_list"
    template_name = "blog/entry_list.haml"

    def get_queryset(self):
        return Entry.published.all()

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super(EntryListView, self).get_context_data(**kwargs)
        self.inflate_context(context)
        return context

class EntrySearchListView(Blog,ListView):

    context_object_name = "entry_list"
    template_name = "blog/entrysearch_list.haml"
    def dispatch(self, *args, **kwargs):
        self.tags = kwargs['tags'].split('+') if 'tags' in kwargs else []
        request = args[0]
        self.query = request.GET.get('q','')
        queries = []
        try:
            if self.query:
                queries.append(SQ(content=self.query))
            if self.tags:
                queries.extend([SQ(tag__exact=tag) for tag in self.tags])
            if len(queries)>0:
                import operator
                self.sqs = SearchQuerySet().filter(reduce(operator.and_,queries))[:]
        except:
            pass
        return super(EntrySearchListView, self).dispatch(*args, **kwargs)
    def get_queryset(self):
#       sqs = sqs.narrow('tag:prueba')
        #sqs = sqs.narrow('tag:%s AND tag:a'%'prueba')
        if self.sqs is not None:
            return [ob.object for ob in self.sqs]
        else:
            return Entry.published.all()

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super(EntrySearchListView, self).get_context_data(**kwargs)
        self.inflate_context(context)
        return context

class EntryDetailView(Blog,DetailView):

    context_object_name = "entry"
    template_name = "blog/entry_detail.haml"

    def get_queryset(self):
        return Entry.published.all()

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super(EntryDetailView, self).get_context_data(**kwargs)
        self.inflate_context(context)
        try:
            more_like_this = SearchQuerySet().more_like_this(self.object).run_mlt()
        except:
            more_like_this =[]
        context['more_like_this'] = more_like_this
        return context
