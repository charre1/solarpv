from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('contact/', views.signup_view, name='contact'),
    path('login/', views.login, name='login'),
    path('search/', views.search, name='search')

]