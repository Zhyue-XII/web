from django.urls import path
from .views import post_topic, edit_topic, course, login, logout, register, get_topic, change_password, post_discuss, \
    issue_topic, replay_discuss, page_list

urlpatterns = [
    path('login', login, name='login'),
    path('logout', logout, name='logout'),
    path('register', register, name='register'),
    path('changePsd', change_password, name='change_password'),
    path('', get_topic, name='get_topic'),  # 首页
    path('topic', post_topic, name='post_topic'),   # 文章详情
    path('pagelist', page_list, name='page_list'),   # 分页查询
    path('postdiscuss', post_discuss, name='post_discuss'),  # 发表评论
    path('relaydiscuss', replay_discuss, name='replay_discuss'),  # 回复评论
    path('edit', edit_topic, name='edit_topic'),  # 跳转页面
    path('issuetopic', issue_topic, name='issue_topic'),  # 发表文章
    path('course', course, name='course'),  # 教程页
]
