from django.db import models
from subjects.models import Subject
from schools.models import School
# from students.models import Student

# Create your models here.
class Classroom(models.Model):
    schoolID = models.ForeignKey(School, on_delete=models.CASCADE, related_name='classrooms')
    name = models.CharField(max_length=250)
    schedule = models.JSONField(default=dict)

    def __str__(self):
        return self.name

class Subjects_Classroom(models.Model):
    classroomID = models.ForeignKey(Classroom,on_delete=models.CASCADE, related_name='subjects')
    subjectId = models.ForeignKey(Subject,on_delete=models.CASCADE)

    def __str__(self):
        return "%s %s" % (self.classroomID.name, self.subjectId.name)

