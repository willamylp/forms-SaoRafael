from django.urls import path
from .views import home
from Forms_SaoRafael.views import logoutApp

urlpatterns = [
    path('', home, name="home"),
    path('logoutApp', logoutApp, name="logoutApp"),
]