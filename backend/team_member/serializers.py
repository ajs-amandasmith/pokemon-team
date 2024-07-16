from rest_framework import serializers
from .models import TeamMember

class TeamMemberSerializer(serializers.ModelSerializer):
  class Meta:
    model = TeamMember
    fields = ('name', 'nick_name', 'number', 'image', 'height', 'weight', 'gender', 'type1', 'type2', 'flavor_text')