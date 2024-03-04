# serializers.py
from rest_framework import serializers
from .models import Event

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'title', 'video_file', 'image', 'description', 'location', 'date', 'time', 'attendees')
