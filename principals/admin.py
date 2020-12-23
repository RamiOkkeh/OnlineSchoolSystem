from django.contrib import admin
from principals.models import Principal
from import_export.admin import ImportExportModelAdmin
# Register your models here.

# admin.site.register(Principal)


@admin.register(Principal)
class PrincipalAdmin(ImportExportModelAdmin):
    pass