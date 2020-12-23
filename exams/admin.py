from django.contrib import admin
from exams.models import Exams 
from import_export.admin import ImportExportModelAdmin
# Register your models here.

# admin.site.register(Exams)

@admin.register(Exams)
class ExamsAdmin(ImportExportModelAdmin):
    pass