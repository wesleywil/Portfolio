from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User

from projects.models import Project



class Profile(models.Model):
    user = models.OneToOneField(User, related_name='profile', on_delete=models.CASCADE)
    picture = models.ImageField(upload_to='profile/', null=True, blank=True)
    github_link = models.CharField(max_length=200, null=True, blank=True)
    projects = models.ManyToManyField(Project, blank=True)

    def __str__(self):
        return self.user.username

def post_user_created_signal(sender, instance, created, **kwargs):
    print(instance, created)
    if created:
        Profile.objects.create(user = instance)

post_save.connect(post_user_created_signal, sender=User)

