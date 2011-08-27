from haystack import indexes
from blog.models import Entry
#from haystack import site



# More typical usage involves creating a subclassed `SearchIndex`. This will
# provide more control over how data is indexed, generally resulting in better
# search.
class EntryIndex(indexes.RealTimeSearchIndex, indexes.Indexable):
    text = indexes.CharField(document=True, use_template=True)
    tag = indexes.MultiValueField()
    autor = indexes.MultiValueField()
    
    def get_model(self):
        return Entry
    
    def index_queryset(self):
        return self.get_model().published.all()
    
    def prepare_tag(self, obj):
        # Store a list of id's for filtering
        return [ob.slug for ob in obj.tags.all()]
        
    def prepare_autor(self, obj):
        # Store a list of id's for filtering
        return [ob.username for ob in obj.authors.all()]

        # Alternatively, you could store the names if searching for toy names
        # is more useful.
        # return [toy.name for toy in obj.toys.all()]
