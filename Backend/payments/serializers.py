from rest_framework import serializers
from payments.models import Payment


class PaymentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ("studentID", "schoolID", "token", "amount" ,"date")
