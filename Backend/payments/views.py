from django.shortcuts import render
from rest_framework import generics
from payments.serializers import PaymentCreateSerializer
from payments.models import Payment
from rest_framework.decorators import api_view
from rest_framework.response import Response
from datetime import date


# Create your views here.
class PaymentList(generics.ListCreateAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentCreateSerializer

@api_view(['POST'])
def addPayment(request):
    # print(">>>>>>>>>>>>>>")
    # print(request.data)
    for student in request.data['students']:
        print(student['userID'])
        pay = {
            "studentID":student['userID'],
            "amount":request.data['amount'],
            "schoolID":request.data['schoolID'],
            "semester":request.data['semester']
        }
        serializer = PaymentCreateSerializer(data=pay)
        print(serializer.is_valid())
        print(serializer.errors)
        if serializer.is_valid():
            serializer.save()

    return Response({"success": True})

@api_view(['POST'])
def checkout(request):
    print(">>>>>>>>>>>>>>")
    print(request.data)
    Payment.objects.filter(studentID=request.data['userID']).update(paid=True, token = request.data['token'],payDate=date.today())
    return Response({"success": True})

@api_view(['POST'])
def details(request):
    studentPay = Payment.objects.all().filter(studentID=request.data['studentID'])
    serializer = PaymentCreateSerializer(studentPay, many=True)
    return Response(serializer.data)