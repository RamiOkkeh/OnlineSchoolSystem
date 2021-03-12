from django.contrib import admin
from subjects.models import Subject
from import_export.admin import ImportExportModelAdmin

# Register your models here.

# admin.site.register(Subject)


@admin.register(Subject)
class SubjectAdmin(ImportExportModelAdmin):
    pass