from django.db import models

# Create your models here.
class YoutubeVideo(models.Model):
    title = models.CharField(max_length=100)
    channel = models.CharField(max_length=100)