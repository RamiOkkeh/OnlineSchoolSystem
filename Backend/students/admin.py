from django.contrib import admin
from students.models import Student, Student_Subject
from import_export.admin import ImportExportModelAdmin
# Register your models here.

# admin.site.register(Student)
admin.site.register(Student_Subject)


@admin.register(Student)
class StudentAdmin(ImportExportModelAdmin):
    pass