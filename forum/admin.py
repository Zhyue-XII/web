from extra_apps import xadmin
from .models import Topic
from .models import Plate

xadmin.site.register(Topic)
xadmin.site.register(Plate)
