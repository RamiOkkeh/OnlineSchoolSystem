from django.db import models
from users.models import UserAccount
from schools.models import School
from classrooms.models import Classroom

# Create your models here.
class Student(models.Model):
    userID = models.OneToOneField(UserAccount, on_delete=models.CASCADE)
    schoolID = models.ForeignKey(School, on_delete=models.CASCADE)

    def __str__(self):
        return self.userID.name

class Student_Classroom(models.Model):
    studentID = models.ForeignKey(Student, on_delete=models.CASCADE , related_name='classes')
    classroomID = models.ForeignKey(Classroom, on_delete=models.CASCADE)

    def __str__(self):
        return "%s %s" % (self.studentID.userID.name, self.classroomID.name)