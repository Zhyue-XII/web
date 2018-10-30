from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.views import login as sys_login, logout as sys_logout
from forum.models import Plate, Topic, Discuss


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
    users = User.objects.filter(username=username).first()
    if users is None:
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
        return JsonResponse({"code": 200, "mess": "修改成功"})
    else:
        return JsonResponse({"code": 204, "mess": "密码输入错误"})


# @csrf_exempt
# def replay_discuss(request):
#     """回复评论"""
#     id = request.POST.get('discussId')
#     replay_detail = request.POST.get('replay')
#     user = request.user.username
#     if user:
#         replay = Replay.objects.create(replay_detail=replay_detail)
#         replay.user_id = request.user
#         replay.discus_id = id
#         replay.save()
#         return JsonResponse({'code': 200, 'mess': 'success'})
#     else:
#         return JsonResponse({'code': 204, 'mess': '请先登陆'})


def post_topic(request):
    """获取文章及评论信息"""
    id = request.GET.get("id")
    data = Topic.objects.get(id=id)
    data.like += 1
    data.save()
    """获取热门帖子"""
    hot = Topic.objects.all().order_by('-like')[0:5]
    discusses = Discuss.objects.filter(topic_id=id).values('id', 'user__username', 'topic_id',
                                                           'discuss_detail', 'topic__issue_time', 'img', 'video_url')
    disc = []
    mess = ''
    if discusses:
        for d in discusses:
            disc.append({  # 转化数据格式
                'id': d['id'],
                'user': d['user__username'],
                'detail': d['discuss_detail'],
                'time': d['topic__issue_time'],
                'img': d['img'],
                'url': d['video_url'],
            })
    else:
        mess = '暂无评论'
    return render(request, 'forum/topic.html',
                  {
                      'data': data,
                      'disc': disc,
                      'mess': mess,
                      'id': id,
                      'hot': hot
                  })


@csrf_exempt
def post_discuss(request):
    """发表评论"""
    id = request.POST.get('id')
    discuss_detail = request.POST.get('discuss-detail')
    link = request.POST.get('link')
    img = request.POST.get('img')
    user = request.user.username
    if user:
        discuss = Discuss.objects.create(topic_id=id, discuss_detail=discuss_detail)
        discuss.img = img
        discuss.video_url = link
        discuss.user_id = request.user
        discuss.save()
        return JsonResponse({'code': 200, 'mess': 'succes'})
    else:
        return JsonResponse({'code': 204, 'mess': '请先登陆'})


def edit_topic(request):
    data = Plate.objects.all()
    return render(request, 'forum/edit.html', {'data': data})


@csrf_exempt
def issue_topic(request):
    """发布帖子"""
    pic = request.POST.get('picture')
    topic_title = request.POST.get('topic_title')
    topic_text = request.POST.get('topic_text')
    plate_name = request.POST.get('plate_name')
    user = request.user.username
    if user:
        topic = Topic.objects.create(topic_title=topic_title, topic_text=topic_text, plate_id=plate_name, picture=pic)
        topic.user_id = request.user
        topic.save()
        return JsonResponse({'code': 200, 'mess': 'success'})
    else:
        return JsonResponse({'code': 204, 'mess': '请先登录'})


def get_topic(request):
    """获取分页总记录数"""
    count = Topic.objects.filter().exclude(user_id=2).count()
    """置顶帖子"""
    data = Topic.objects.filter(user_id=2).values('id', 'topic_title', 'issue_time', 'like', 'user__username', 'plate_id')
    return render(request, 'forum/forums.html', {'count': count, 'data': data})


@csrf_exempt
def page_list(request):
    """分页查询"""
    curr = int(request.POST.get('curr'))
    data_list = Topic.objects.filter().exclude(user_id=2).values('id', 'topic_title', 'issue_time', 'like', 'user__username', 'plate_id').order_by(
        '-id')[(curr-1)*8: curr * 8]
    data = []
    for dl in data_list:
        data.append({
            'id': dl['id'],
            'title': dl['topic_title'],
            'issue_time': str(dl['issue_time']).split(' ', 1)[0],
            'dz_number': dl['like'],
            'author': dl['user__username'],
            'plate': dl['plate_id']
        })
    return JsonResponse({'code': 200, 'data': data})


def course(request):
    return render(request, 'forum/course.html')
