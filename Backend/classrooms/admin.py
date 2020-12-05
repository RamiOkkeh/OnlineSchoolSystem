from django.contrib import admin
from classrooms.models import Classroom
from classrooms.models import Subjects_Classrooms
# Register your models here.

admin.site.register(Classroom)
admin.site.register(Subjects_Classrooms)