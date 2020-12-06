from django.db import models
from schools.models import School

# Create your models here.

class Subject(models.Model):
    schoolID = models.ForeignKey(School, on_delete=models.CASCADE)
    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name