from django.shortcuts import render
from principals.models import Principal
from principals.serializers import PrincipalCreateSerializer
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
class PrincipalList(generics.ListCreateAPIView):
    queryset = Principal.objects.all()
    serializer_class = PrincipalCreateSerializer

@api_view(['POST'])
def details(request):
    principal = Principal.objects.all().filter(userID=request.data['userID'])
    serializer = PrincipalCreateSerializer(principal, many=True)
    return Response(serializer.data)