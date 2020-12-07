from django.shortcuts import render
from rest_framework import generics
from students.serializers import StudentCreateSerializer
from students.models import Student

# Create your views here.


class StudentList(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentCreateSerializer
