from django.db import models
from users.models import UserAccount
import datetime

# Create your models here.
class Post(models.Model):
    userID = models.OneToOneField(UserAccount, on_delete=models.CASCADE)
    text = models.TextField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)

    def __str__(self):
        return self.userID.name
