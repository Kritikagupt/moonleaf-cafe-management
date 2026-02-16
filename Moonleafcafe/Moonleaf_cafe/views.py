from django.shortcuts import render

def Moonleaf_home(request):
    return render(request, "Moonleaf_cafe/cafe.html")

def about(request):
    return render(request, "Moonleaf_cafe/about.html")

def location(request):
    return render(request, "Moonleaf_cafe/location.html")

def Eshop(request):
    return render(request, "Moonleaf_cafe/E-shop.html")
def contact(request):
    return render(request, "Moonleaf_cafe/contact.html")
def menu(request):
    return render(request, "Moonleaf_cafe/menu.html")



# Create your views here.
