from django.db import models
from users.models import UserAccount

# Create your models here.
class Teacher(models.Model):
    userID = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    school = models.CharField(max_length=30)
    subject = models.CharField(max_length=30)

    def __str__(self):
        return self.userID.name
