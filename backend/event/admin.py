# In your admin.py file

from django.contrib import admin
from .models import Event

class EventAdmin(admin.ModelAdmin):
    list_display = ['title', 'location']

admin.site.register(Event, EventAdmin)
