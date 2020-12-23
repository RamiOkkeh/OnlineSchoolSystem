from django.contrib import admin
from users.models import UserAccount
from import_export.admin import ImportExportModelAdmin

# Register your models here.

# admin.site.register(UserAccount)
@admin.register(UserAccount)
class UserAccountAdmin(ImportExportModelAdmin):
    pass