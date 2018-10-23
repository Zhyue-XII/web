from django.contrib.auth.models import User
from django.db import models


class Plate(models.Model):
    name = models.CharField(max_length=50)

    class Meta:
        verbose_name = '系统模块'
        verbose_name_plural = '系统模块'

    def __str__(self):
        return self.name


class Topic(models.Model):
    topic_title = models.CharField(max_length=50)
    topic_text = models.TextField()
    issue_time = models.DateTimeField(auto_now=True)     # 发布事件
    like = models.IntegerField(default=0)      # 点赞数量
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    plate = models.ForeignKey(Plate, null=True, on_delete=models.SET_NULL)
    picture = models.TextField(null=True)

    class Meta:
        verbose_name = '帖子管理'
        verbose_name_plural = '帖子管理'

    def __str__(self):
        return self.topic_title


class Discuss(models.Model):
    discuss_detail = models.TextField()
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    topic = models.ForeignKey(Topic, null=True, on_delete=models.SET_NULL)


class Replay(models.Model):
    replay_detail = models.TextField()
    discus = models.ForeignKey(Discuss, null=True, on_delete=models.SET_NULL)
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
