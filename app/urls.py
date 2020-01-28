from django.urls import path, include


urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('drawnings.urls')),
    path('', include('accounts.urls')),
]
