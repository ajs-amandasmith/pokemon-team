from django.contrib import admin
from .models import TeamMember

class TeamMemberAdmin(admin.ModelAdmin):
  list_display = ('name', 'nick_name', 'number', 'image', 'height', 'weight', 'gender', 'type1', 'type2', 'flavor_text')

# Register your models here.

admin.site.register(TeamMember, TeamMemberAdmin)