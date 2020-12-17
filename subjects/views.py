from django.shortcuts import render
from rest_framework import generics
from subjects.serializers import SubjectCreateSerializer
from subjects.models import Subject
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.


class SubjectList(generics.ListCreateAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectCreateSerializer

@api_view(['POST'])
def getSchoolSubjects(request):
    subjects = Subject.objects.all().filter(schoolID=request.data['schoolID'])
    serializer = SubjectCreateSerializer(subjects, many=True)
    return Response(serializer.data)
