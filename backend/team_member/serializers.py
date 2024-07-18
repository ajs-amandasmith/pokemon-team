from rest_framework import serializers
from .models import TeamMember

class TeamMemberSerializer(serializers.ModelSerializer):
  class Meta:
    model = TeamMember
    fields = ('name', 'number', 'image', 'type1', 'type2', 'flavor_text', 'id')