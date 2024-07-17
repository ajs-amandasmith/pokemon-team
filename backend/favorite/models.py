from django.db import models

# Create your models here.

class Favorite(models.Model):
  name = models.CharField(max_length=50)
  number = models.IntegerField()
  image = models.CharField(max_length=500)
  type1 = models.CharField(max_length=20)
  type2 = models.CharField(max_length=20)
  flavor_text = models.TextField()