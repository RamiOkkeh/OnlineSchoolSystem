from django.shortcuts import render
from rest_framework import generics
from subjects.serializers import SubjectCreateSerializer
from subjects.models import Subject

# Create your views here.


class SubjectList(generics.ListCreateAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectCreateSerializer
