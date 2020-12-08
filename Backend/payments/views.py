from django.shortcuts import render
from rest_framework import generics
from payments.serializers import PaymentCreateSerializer
from payments.models import Payment


# Create your views here.
class PaymentList(generics.ListCreateAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentCreateSerializer
