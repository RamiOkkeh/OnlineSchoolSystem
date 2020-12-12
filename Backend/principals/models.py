from django.db import models
from users.models import UserAccount
from schools.models import School

# Create your models here.
class Principal(models.Model):
    userID = models.OneToOneField(UserAccount, on_delete=models.CASCADE)
    schoolID = models.ForeignKey(School, on_delete=models.CASCADE)

    def __str__(self):
        return self.userID.name