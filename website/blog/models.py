from datetime import datetime

from django.db import models
from django.db.models import Manager, Q
from django.contrib.auth.models import User
from django.utils.translation import ugettext_lazy as _
from django.core.exceptions import ObjectDoesNotExist
from slugify import slugify

from taggit.managers import TaggableManager

STATUS_DRAFT = 0
STATUS_HIDDEN = 1
STATUS_PUBLISHED = 2
def base_concrete_model(abstract, instance):

    for cls in reversed(instance.__class__.__mro__):
        if issubclass(cls, abstract) and not cls._meta.abstract:
            return cls
    return instance.__class__

class PublishedManager(Manager):
    def get_query_set(self):
        """
        For non-staff users, return items with a published status and
        whose publish and expiry dates fall before and after the
        current date when specified.
        """
        # if for_user is not None and for_user.is_staff:
        #     return self.all()
        return super(PublishedManager, self).get_query_set().filter(
            Q(publish_date__lte=datetime.now()) | Q(publish_date__isnull=True),
#            Q(expiry_date__gte=datetime.now()) | Q(expiry_date__isnull=True),
            Q(status=STATUS_PUBLISHED))

    # def get_by_natural_key(self, slug):
    #     return self.get(slug=slug)

class Slugged(models.Model):
    """
    Abstract model that handles auto-generating slugs.
    """

    title = models.CharField(_("title"), max_length=100)
    slug = models.CharField(_("slug"), max_length=100, blank=True, null=True,unique=True)

    class Meta:
        abstract = True
        ordering = ("title",)

    def __unicode__(self):
        return self.title

    def save(self, *args, **kwargs):
        """
        Create a unique slug by appending an index.
        """
        if not self.slug and self.status == STATUS_PUBLISHED:
            # For custom content types, use the ``Page`` instance for
            # slug lookup.
            self.slug = self.get_slug()
        concrete_model = base_concrete_model(Slugged, self)
        i = 0
        while True:
            if i > 0:
                if i > 1:
                    self.slug = self.slug.rsplit("-", 1)[0]
                self.slug = "%s-%s" % (self.slug, i)
            qs = concrete_model.objects.all()
            if self.id is not None:
                qs = qs.exclude(id=self.id)
            try:
                qs.get(slug=self.slug)
            except ObjectDoesNotExist:
                break
            i += 1
        super(Slugged, self).save(*args, **kwargs)

    def natural_key(self):
        return (self.slug,)

    def get_slug(self):
        """
        Allows subclasses to implement their own slug creation logic.
        """
        return '%04d/%02d/%02d/%s'%(self.publish_date.year,self.publish_date.month, self.publish_date.day,slugify(self.title))


class Entry(Slugged):
    # ... fields here
    STATUS_CHOICES = ((STATUS_DRAFT, _('draft')),
                      (STATUS_HIDDEN, _('hidden')),
                      (STATUS_PUBLISHED, _('published')))
    status = models.IntegerField(choices=STATUS_CHOICES, default=STATUS_DRAFT)
    tags = TaggableManager()
    content = models.TextField(_("Content"))
    authors = models.ManyToManyField(User, verbose_name=_('authors'),
                                     related_name='entries',
                                     blank=True, null=False)
    publish_date = models.DateTimeField(_("Published from"),
        help_text=_("With published checked, won't be shown until this time"),
        blank=True, null=True, auto_now_add=True)
    # expiry_date = models.DateTimeField(_("Expires on"),
    #     help_text=_("With published checked, won't be shown after this time"),
    #     blank=True, null=True)
    objects = models.Manager()
    published = PublishedManager()
    def __unicode__ (self):
        return self.title
    
    @models.permalink
    def get_absolute_url(self):
        return ('entry_detail',(),{'slug':self.slug})