from django.contrib import admin

from .models import Client
from .models import Location
from .models import TestStandard
from .models import TestSequence
from .models import Product
from .models import PerformanceData
from .models import Service
from .models import Certificate

admin.site.register(Client)
admin.site.register(Location)
admin.site.register(TestStandard)
admin.site.register(TestSequence)
admin.site.register(Product)
admin.site.register(PerformanceData)
admin.site.register(Service)
admin.site.register(Certificate)

