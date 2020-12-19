from django.shortcuts import render
from rest_framework import generics
from parents.models import Parent
from parents.serializers import ParentCreateSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
class ParentList(generics.ListCreateAPIView):
    queryset = Parent.objects.all()
    serializer_class = ParentCreateSerializer

@api_view(['POST'])
def details(request):
    parent = Parent.objects.all().filter(userID=request.data['userID'])
    serializer = ParentCreateSerializer(parent, many=True)
    return Response(serializer.data)