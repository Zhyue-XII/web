from django.http import HttpResponse
import json
from .models import ContactUs


def contact_us(request):
    name = request.GET.get("name")
    mobile = request.GET.get("tel")
    print(mobile)
    company_name = request.GET.get("company")
    emails = request.GET.get("email")
    remark = request.GET.get("remark")
    address = request.GET.get("address")
    ContactUs.objects.create(name=name, mobile=mobile, company_name=company_name,
                             emails=emails, address=address, remark=remark)
    mess = "提交成功"
    return HttpResponse(json.dumps(mess), content_type='application/json')
