from django.db import models
from users.models import UserAccount
from schools.models import School
import datetime
from datetime import date, timedelta

# Create your models here.
class Payment(models.Model):
    schoolID = models.ForeignKey(School, on_delete=models.CASCADE)
    studentID = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    semester = models.CharField(max_length=25, default="")
    amount = models.IntegerField()
    dueDate = models.DateField(default=(datetime.date.today() + timedelta(days=30)))
    payDate = models.DateField(null=True)
    token = models.JSONField(default=dict)
    paid = models.BooleanField(default=False)

    class Meta:
        unique_together = [['studentID', 'semester']]

    def __str__(self):
        return self.studentID.name
