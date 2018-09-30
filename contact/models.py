from django.db import models


class ContactUs(models.Model):
    name = models.CharField(max_length=20)
    mobile = models.CharField(max_length=20)
    company_name = models.CharField(max_length=50)
    emails = models.CharField(max_length=30)
    address = models.CharField(max_length=50)
    remark = models.CharField(max_length=225)

    class Meta:
        verbose_name = '联系我们'
        verbose_name_plural = '联系我们'

    def __str__(self):
        return self.name