from django.urls import path
from . import views

urlpatterns = [
    path("", views.Moonleaf_home, name="Moonleaf_cafe"),
    path("location/", views.location, name="location"),
    path("about/", views.about, name="about"),
    path("E-shop/", views.Eshop, name="E-shop"),
    path("contact/", views.contact, name="contact"),
    path("menu/", views.menu, name="menu"),

]
