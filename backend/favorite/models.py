from django.db import models

# Create your models here.

class Favorite(models.Model):
  name = models.CharField(max_length=50)
  number = models.IntegerField()
  image = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=500)
  height = models.FloatField()
  weight = models.FloatField()
  gender = models.CharField(max_length=10)
  type1 = models.CharField(max_length=20)
  type2 = models.CharField(max_length=20)
  flavor_text = models.TextField()