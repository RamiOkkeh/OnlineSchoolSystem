from django.db import models

# Create your models here.
class Payment(models.Model):
    token = models.CharField(max_length=250, unique=True)
    amount = models.CharField(max_length=250)
    schoolID = models.CharField(max_length=50)
    studentID = models.CharField(max_length=50)
    date = models.CharField(max_length=500)

    def __str__(self):
        return self.studentID
