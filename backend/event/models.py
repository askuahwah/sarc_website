# models.py
from django.db import models
from django.contrib.auth import get_user_model

class Event(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(default="default.jpg", upload_to="user_images")
    video_file = models.FileField(default="dafault.mov", upload_to="user_video")
    description = models.TextField(max_length=700)
    location = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    attendees = models.ManyToManyField(get_user_model(), related_name='attended_events', blank=True)

    def __str__(self):
        return f"{self.title} - {self.location}"
