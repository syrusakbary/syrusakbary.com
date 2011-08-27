from django.contrib import admin

from blog.models import Entry

admin.site.register(Entry, admin.ModelAdmin)
