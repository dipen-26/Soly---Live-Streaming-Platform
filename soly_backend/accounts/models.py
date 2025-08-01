from django.db import models
from django.utils import timezone
class User(models.Model):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    profile_image = models.ImageField(upload_to='profile_images/', blank=True, null=True)
    is_streamer = models.BooleanField(default=False)  # Initially False
    bio = models.TextField(blank=True, null=True)
    date_joined = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.username
