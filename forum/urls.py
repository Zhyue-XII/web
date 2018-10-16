from django.urls import path
from .views import post_topic, edit_topic, course, login, logout, register, get_topic, change_password

urlpatterns = [
    path('', get_topic, name='get_topic'),
    path('topic', post_topic, name='post_topic'),
    path('edit', edit_topic, name='edit_topic'),
    path('course', course, name='course'),
    path('login', login, name='login'),
    path('logout', logout, name='logout'),
    path('register', register, name='register'),
    path('changePsd', change_password, name='change_password'),
]
