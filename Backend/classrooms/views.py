from django.shortcuts import render
from rest_framework import generics
from classrooms.serializers import ClassroomCreateSerializer
from classrooms.models import Classroom

# Create your views here.


class ClassroomList(generics.ListCreateAPIView):
    queryset = Classroom.objects.all()
    serializer_class = ClassroomCreateSerializer
