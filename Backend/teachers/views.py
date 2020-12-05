from django.shortcuts import render
from rest_framework import generics
from teachers.serializers import TeacherCreateSerializer
from teachers.models import Teacher

# Create your views here.


class TeacherList(generics.ListCreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherCreateSerializer
