from django.db import models
from users.models import UserAccount

# Create your models here.
class Student(models.Model):
    userID = models.OneToOneField(UserAccount, on_delete=models.CASCADE)
    schoolID = models.CharField(max_length=30)

    def __str__(self):
        return self.userID.name
