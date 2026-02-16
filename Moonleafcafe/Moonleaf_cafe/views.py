from django.shortcuts import render

def Moonleaf_home(request):
    return render(request, "Moonleaf_cafe/cafe.html")

def about(request):
    return render(request, "Moonleaf_cafe/about.html")

def Eshop(request):
    return render(request, "Moonleaf_cafe/E-shop.html")




# Create your views here.
