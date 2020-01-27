from rest_framework import routers
from .api import DrawningViewSet


router = routers.DefaultRouter()
router.register('api/drawnings', DrawningViewSet, 'drawnings')


urlpatterns = router.urls
