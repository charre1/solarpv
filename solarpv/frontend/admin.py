from django.contrib import admin
from .models import Profile

admin.site.register(Profile)

admin.site.site_header = 'SolarPV Administration'
admin.site.site_title = 'SolarPV Admin'
admin.site.index_title = 'SolarPV Administration'
admin.empty_value_display = '**Empty**'
#admin.site.site_url = 'http://solarpv.com/'