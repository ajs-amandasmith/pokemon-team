from rest_framework import serializers
from .models import Favorite

class FavoriteSerializer(serializers.ModelSerializer):
  class Meta:
    model = Favorite
    fields = ('name', 'number', 'image', 'type1', 'type2', 'flavor_text')