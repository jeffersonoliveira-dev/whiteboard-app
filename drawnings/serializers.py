from rest_framework import serializers
from drawnings.models import Drawning

# Drawning serializer

class DrawningSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drawning
        fields = '__all__'

