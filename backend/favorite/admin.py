from django.contrib import admin
from .models import Favorite

class FavoriteAdmin(admin.ModelAdmin):
  list_display = ('name', 'number', 'image', 'type1', 'type2', 'flavor_text')

# Register your models here.

admin.site.register(Favorite, FavoriteAdmin)