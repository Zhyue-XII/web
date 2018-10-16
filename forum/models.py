from django.db import models


class Form(models.Model):
    topic = models.CharField(max_length=225)