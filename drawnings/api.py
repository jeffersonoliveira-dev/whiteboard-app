from drawnings.models import Drawning
from rest_framework import viewsets, permissions
from .serializers import DrawningSerializer


# Drawning viewset
class DrawningViewSet(viewsets.ModelViewSet):
    queryset = Drawning.objects.all()

    permission_classes = [
        permissions.AllowAny
        ]
    serializer_class = DrawningSerializer

