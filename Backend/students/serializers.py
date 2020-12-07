from rest_framework import serializers
from students.models import Student, Student_Subject

class StundentSubjectSerializer(serializers.ModelSerializer):
    studentName = serializers.CharField(source='studentID.name', read_only=True)
    subjectName = serializers.CharField(source='subjectID.name',read_only=True)
    class Meta:
        model = Student_Subject
        fields = ('studentID', 'subjectID','subjectName' , 'studentName')

class StudentCreateSerializer(serializers.ModelSerializer):
    subjects = StundentSubjectSerializer(many=True, read_only=True)
    class Meta:
        model = Student
        fields = ("userID", "schoolID" , "classroomID","subjects")
