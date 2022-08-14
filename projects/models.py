from hashlib import blake2b
from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    link = models.CharField(max_length=200)
    tags = models.ManyToManyField("Tag", blank=True)

class Tag(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()

