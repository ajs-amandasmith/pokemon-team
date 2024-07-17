"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from team_member import views as view
from favorite import views

favorite_router = routers.DefaultRouter()
team_member_router = routers.DefaultRouter()
team_member_router.register(r'team_members', view.TeamMemberView, 'team_member')
favorite_router.register(r'favorites', views.FavoriteView, 'favorite')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(team_member_router.urls)),
    path('api/', include(favorite_router.urls))
]
