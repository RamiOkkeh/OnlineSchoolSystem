from django.shortcuts import render
from rest_framework import generics
from students.serializers import StudentCreateSerializer
from students.models import Student
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.


class StudentList(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentCreateSerializer

@api_view(['POST'])
def assignClass(request):
    print(">>>>>>>>>>>>>>")
    print(request.data)
    # updateStudent = Student.objects.filter(userID==request.data['userID'])
    # updateStudent.classroomID = request.data['assign']
    Student.objects.filter(userID=request.data['userID']).update(classroomID=request.data['classroomID'])
    return Response({"success": True})


@api_view(['POST'])
def details(request):
    student = Student.objects.all().filter(userID=request.data['userID'])
    serializer = StudentCreateSerializer(student, many=True)
    return Response(serializer.data)