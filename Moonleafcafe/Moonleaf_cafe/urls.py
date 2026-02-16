from django.urls import path
from . import views

urlpatterns = [
    path("", views.Moonleaf_home, name="Moonleaf_cafe"),
    
    path("about/", views.about, name="about"),
    path("E-shop/", views.Eshop, name="E-shop"),
    

]
