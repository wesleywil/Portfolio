from django.db import models
from PIL import Image

class Project(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='projects/' ,default="projects/default/default.png")
    description = models.TextField()
    link = models.CharField(max_length=200)
    tags = models.ManyToManyField("Tag", blank=True)
    personal = models.BooleanField(default=True)

    def __str__(self):
        return self.title
    
    def save(self):
        super().save()
        img = Image.open(self.image.path)

        if img.height > 400 or img.width > 600:
            new_img = (400,600)
            img.thumbnail(new_img)
            img.save(self.image.path)

class Tag(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()


