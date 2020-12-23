from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from users.models import UserAccount
from schools.models import School
from subjects.models import Subject
from classrooms.models import Classroom

# Create your models here.
class Exams(models.Model):
    schoolID = models.ForeignKey(School, on_delete=models.CASCADE)
    studentID = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    subjectID = models.ForeignKey(Subject, on_delete=models.CASCADE)
    classroomID = models.ForeignKey(Classroom, on_delete=models.CASCADE)
    firstGrade = models.IntegerField(validators=[
            MaxValueValidator(100),
            MinValueValidator(0)
        ], default=0)
    secondGrade = models.IntegerField(validators=[
            MaxValueValidator(100),
            MinValueValidator(0)
        ], default=0)
    finalGrade = models.IntegerField(validators=[
            MaxValueValidator(100),
            MinValueValidator(0)
        ], default=0)
    firstExam = models.JSONField(default=dict)
    secondExam = models.JSONField(default=dict)
    finalExam = models.JSONField(default=dict)

    class Meta:
        unique_together = [['studentID', 'subjectID']]
    
    def __str__(self):
        return "%s %s" % (self.studentID.name, self.subjectID.name)