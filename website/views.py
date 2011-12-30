from django.views.generic import TemplateView
from blog.models import Entry
class MainView(TemplateView):

    template_name = "main.jade"

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super(MainView, self).get_context_data(**kwargs)
        # Add in the publisher
        context['last_entries'] = Entry.published.all()[:3]
        #context['publisher'] = self.publisher
        return context
