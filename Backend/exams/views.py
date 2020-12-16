from django.shortcuts import render
from rest_framework import generics
from exams.serializers import ExamCreateSerializer
from exams.models import Exams
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.


class ExamList(generics.ListCreateAPIView):
    queryset = Exams.objects.all()
    serializer_class = ExamCreateSerializer


@api_view(['POST'])
def assignFirstExam(request):
    # print(">>>>>>>>>>>>>>")
    # print(request.data)
    for student in request.data['students']:
        print(student['userID'])   
        exam = {
            "studentID":student['userID'],
            "schoolID": student['schoolID'],
            "classroomID": student['classroomID'],
            "subjectID": request.data['subjectID'],
            "firstExam":request.data['firstExam']
        }
        serializer = ExamCreateSerializer(data=exam)
        print(serializer.is_valid())
        print(serializer.errors)
        if serializer.is_valid():
            serializer.save()

    return Response({"success": True})

@api_view(['POST'])
def assignSecondExam(request):
    # print(">>>>>>>>>>>>>>")
    # print(request.data)
    for student in request.data['students']:
        print(student['userID'])   
        Exams.objects.filter(studentID=student['userID'], subjectID=request.data['subjectID']).update(secondExam=request.data['secondExam'])

    return Response({"success": True})

@api_view(['POST'])
def assignFinalExam(request):
    # print(">>>>>>>>>>>>>>")
    # print(request.data)
    for student in request.data['students']:
        print(student['userID'])   
        Exams.objects.filter(studentID=student['userID'], subjectID=request.data['subjectID']).update(finalExam=request.data['finalExam'])

    return Response({"success": True})

@api_view(['POST'])
def assignFirstGrade(request):
    print(">>>>>>>assignFirstGrade>>>>>>>")
    print(request.data)
    Exams.objects.filter(studentID=request.data['studentID'], subjectID=request.data['subjectID']).update(firstGrade=request.data['firstGrade'])
    return Response({"success": True})

@api_view(['POST'])
def assignSecondGrade(request):
    print(">>>>>>>>>>>>>>")
    print(request.data)
    Exams.objects.filter(studentID=request.data['studentID'], subjectID=request.data['subjectID']).update(secondGrade=request.data['secondGrade'])
    return Response({"success": True})

@api_view(['POST'])
def assignFinalGrade(request):
    print(">>>>>>>>>>>>>>")
    print(request.data)
    Exams.objects.filter(studentID=request.data['studentID'], subjectID=request.data['subjectID']).update(finalGrade=request.data['finalGrade'])
    return Response({"success": True})

@api_view(['POST'])
def details(request):
    examGrade = Exams.objects.all().filter(studentID=request.data['studentID'], subjectID=request.data['subjectID'])
    serializer = ExamCreateSerializer(examGrade, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def stats(request):
    examStats = Exams.objects.all().filter(studentID=request.data['studentID'])
    serializer = ExamCreateSerializer(examStats, many=True)
    return Response(serializer.data)
