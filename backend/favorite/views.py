from django.shortcuts import render
from rest_framework import viewsets
from .serializers import FavoriteSerializer
from .models import Favorite

# Create your views here.

class FavoriteView(viewsets.ModelViewSet):
  serializer_class = FavoriteSerializer
  queryset = Favorite.objects.all()