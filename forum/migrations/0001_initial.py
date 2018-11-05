# Generated by Django 2.0.7 on 2018-10-30 07:52

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Discuss',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('discuss_detail', models.TextField()),
                ('img', models.TextField(null=True)),
                ('video_url', models.CharField(max_length=225, null=True)),
                ('t', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Plate',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': '系统模块',
                'verbose_name_plural': '系统模块',
            },
        ),
        migrations.CreateModel(
            name='Topic',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('topic_title', models.CharField(max_length=50)),
                ('topic_text', models.TextField()),
                ('issue_time', models.DateTimeField(auto_now=True)),
                ('like', models.IntegerField(default=0)),
                ('picture', models.TextField(null=True)),
                ('plate', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='forum.Plate')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': '帖子管理',
                'verbose_name_plural': '帖子管理',
            },
        ),
        migrations.AddField(
            model_name='discuss',
            name='topic',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='forum.Topic'),
        ),
        migrations.AddField(
            model_name='discuss',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
    ]