from drawnings.models import Drawning
from rest_framework import viewsets, permissions
from .serializers import DrawningSerializer


# Drawning viewset
class DrawningViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
        ]

    serializer_class = DrawningSerializer

    def get_queryset(self):
        return self.request.user.drawnings.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

