from rest_framework import serializers
from payments.models import Payment


class PaymentCreateSerializer(serializers.ModelSerializer):
    studentName = serializers.CharField(source='studentID.userID.name', read_only=True)
    class Meta:
        model = Payment
        fields = ("studentID", "schoolID", "studentName", "token", "amount", "semester" ,"dueDate", "payDate", "paid")
