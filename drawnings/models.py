from django.db import models

class Drawning(models.Model):
    draw = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)


# Create your models here.
