from django.contrib import admin
from parents.models import Parent
from import_export.admin import ImportExportModelAdmin

# Register your models here.

# admin.site.register(Parent)


@admin.register(Parent)
class ParentAdmin(ImportExportModelAdmin):
    pass