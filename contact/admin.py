from extra_apps import xadmin
# Register your models here.
from .models import ContactUs
xadmin.site.register(ContactUs)
