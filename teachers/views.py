from django.shortcuts import render
from rest_framework import generics
from teachers.serializers import TeacherCreateSerializer
from teachers.models import Teacher
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.


class TeacherList(generics.ListCreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherCreateSerializer


@api_view(['POST'])
def details(request):
    teacher = Teacher.objects.all().filter(userID=request.data['userID'])
    serializer = TeacherCreateSerializer(teacher, many=True)
    return Response(serializer.data)