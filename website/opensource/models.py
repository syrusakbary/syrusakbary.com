from django.db import models

# Create your models here.


class Project(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    url = models.URLField()
    def __unicode__ (self):
        return self.name
#    #content = models.TextField()
#    #version = models.CharField(max_length=20)
#
#
#class Version(models.Model):
#    project = models.ForeignKey(Project)
#    version = models.CharField(max_length=20)
    