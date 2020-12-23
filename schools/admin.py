from django.contrib import admin
from schools.models import School
from import_export.admin import ImportExportModelAdmin

# Register your models here.

# admin.site.register(School)

@admin.register(School)
class SchoolAdmin(ImportExportModelAdmin):
    pass