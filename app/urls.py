from django.contrib import admin
from django.urls import path,include

from app import views

urlpatterns = [
    path('',views.firstpage,name="index"),
    path('signup',views.signupview,name="signup"),
    path('login',views.loginview,name="login"),
    path('home',views.home,name="home"),
    path('logout/', views.logoutview, name='logout'),
    path('process_data/',views.process_data,name="process_data"),
    path('sample/',views.sampleview,name="sample"),
    path('sample2/',views.sample2view,name="sample2"),
    path('home_normal',views.hn,name="home_normal"),
    path("home_pushup",views.hpu,name="hpu"),
    path("home_pullup",views.hpul,name="home_pullups"),
    path("home_squats",views.hsq,name="home_squats"),
    path("home_situps",views.hsu,name="home_situps")
    # path('/logout',views.logout,name="logout")
]


