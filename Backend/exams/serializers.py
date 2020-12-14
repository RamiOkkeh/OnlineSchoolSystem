from rest_framework import serializers
from exams.models import Exams

class ExamCreateSerializer(serializers.ModelSerializer):
    studentName = serializers.CharField(source='studentID.name', read_only=True)
    schoolName = serializers.CharField(source='schoolID.name', read_only=True)
    classroomName = serializers.CharField(source='classroomID.name', read_only=True)
    subjectName = serializers.CharField(source='subjectID.name', read_only=True)
    
    class Meta:
        model = Exams
        fields = ('schoolID', 'schoolName','studentID', 'studentName' , 'subjectID','subjectName','classroomID', 
        'classroomName', 'firstGrade', 'secondGrade', 'finalGrade', 'firstExam', 'secondExam', 'finalExam')