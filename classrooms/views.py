from django.shortcuts import render
from rest_framework import generics
from classrooms.serializers import ClassroomCreateSerializer
from classrooms.models import Classroom

from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.


class ClassroomList(generics.ListCreateAPIView):
    queryset = Classroom.objects.all()
    serializer_class = ClassroomCreateSerializer

@api_view(['POST'])
def getClass(request):
    classroom = Classroom.objects.get(id=request.data['id'])
    serializer = ClassroomCreateSerializer(classroom,many=False)
    return Response(serializer.data)

@api_view(['POST'])
def getSchoolClasses(request):
    classrooms = Classroom.objects.all().filter(schoolID=request.data['schoolID'])
    serializer = ClassroomCreateSerializer(classrooms, many=True)
    return Response(serializer.data)