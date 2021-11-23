from django.contrib import admin
from django.urls import path, include
from frontend.views import index, signup_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('frontend/', include('frontend.urls')),
    path('frontend/contact/', signup_view, name="contact"),
    path('api/', include('backend.api.url', namespace='api'))
    
]
