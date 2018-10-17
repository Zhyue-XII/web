from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.views import login as sys_login, logout as sys_logout
from forum.forms.topic import TopicForm
from forum.models import Plate, Topic


@csrf_exempt
def login(request):
    sys_login(request)
    if request.user.username:
        return JsonResponse({"code": 200, "mess": "succeed"})
    else:
        return JsonResponse({"code": 204, "mess": "用户名或密码错误"})


def logout(request):
    sys_logout(request)
    return JsonResponse({"code": 200, "mess": "注销成功"})


@csrf_exempt
def register(request):
    username = request.POST.get("username")
    password = request.POST.get("password1")
    users = User.objects.all()
    has_user = False
    for u in users:
        if username == u.username:
            has_user = True
        else:
            has_user = False
    if has_user is False:
        user = User.objects.create_user(username, '', password)
        user.is_active = True
        user.is_staff = True
        user.save()
        return JsonResponse({"code": 201, "mess": "注册成功"})
    else:
        return JsonResponse({"code": 204, "mess": "该用户名已被注册"})


@csrf_exempt
def change_password(request):
    old_psd = request.POST.get("password0")
    psd = request.POST.get("password1")
    username = request.user
    user = authenticate(username=username, password=old_psd)
    if user:
        user.password = make_password(psd)
        user.save()
        return JsonResponse({"code": 200, "mess": "success"})
    else:
        return JsonResponse({"code": 204, "mess": "密码输入错误"})


def post_topic(request):
    id = request.GET.get("id")
    data = Topic.objects.get(id=id)
    return render(request, 'forum/topic.html', {'data': data})


def edit_topic(request):
    data = Plate.objects.all()
    return render(request, 'forum/edit.html', {'data': data})


def get_topic(request):
    data = Topic.objects.all().values('id', 'topic_title', 'issue_time', 'like', 'user__username')
    return render(request, 'forum/forums.html', {'data': data})


def course(request):
    return render(request, 'forum/course.html')
