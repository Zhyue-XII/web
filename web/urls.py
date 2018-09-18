"""web URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
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
from django.conf.urls import url
from django.urls import path, include
from extra_apps import xadmin
from django.views.generic.base import TemplateView
from machina.app import board

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('admin/', xadmin.site.urls),  # 后台管理系统
    path('', TemplateView.as_view(template_name='index.html')),
    path('product/', TemplateView.as_view(template_name='product.html')),
    path('about/', TemplateView.as_view(template_name='about.html')),
    path('case/', TemplateView.as_view(template_name='case.html')),
    path('project/', TemplateView.as_view(template_name='project01.html')),
    path('forum/', include(board.urls)),
]
