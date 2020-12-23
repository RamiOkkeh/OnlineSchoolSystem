from django.contrib import admin
from teachers.models import Teacher, Teacher_Classroom
from import_export.admin import ImportExportModelAdmin

# Register your models here.

# admin.site.register(Teacher)
admin.site.register(Teacher_Classroom)

@admin.register(Teacher)
class TeacherAdmin(ImportExportModelAdmin):
    pass