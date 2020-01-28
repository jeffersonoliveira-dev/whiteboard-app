from django.db import models
from django.contrib.auth.models import User

class Drawning(models.Model):
    draw = models.CharField(max_length=255, blank=True)
    owner = models.ForeignKey(User, related_name='drawnings', on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)


# Create your models here.
