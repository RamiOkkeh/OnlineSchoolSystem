from rest_framework import serializers
from students.models import Student, Student_Subject

class StundentSubjectSerializer(serializers.ModelSerializer):
    studentName = serializers.CharField(source='studentID.name', read_only=True)
    subjectName = serializers.CharField(source='subjectID.name',read_only=True)
    
    class Meta:
        model = Student_Subject
        fields = ('subjectID','subjectName' , 'studentName')

class StudentCreateSerializer(serializers.ModelSerializer):
    subjects = StundentSubjectSerializer(many=True, read_only=True)
    studentName = serializers.CharField(source='userID.name', read_only=True)
    schoolName = serializers.CharField(source='schoolID.name', read_only=True)
    classroomName = serializers.CharField(source='classroomID.name', read_only=True)

    class Meta:
        model = Student
        fields = ("userID","studentName" , "schoolID" , "schoolName" , "classroomID", "classroomName" , "subjects")
