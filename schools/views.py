from django.shortcuts import render
from rest_framework import generics
from schools.serializers import SchoolCreateSerializer
from schools.models import School


# Create your views here.


class SchoolList(generics.ListCreateAPIView):
    queryset = School.objects.all()
    serializer_class = SchoolCreateSerializer
