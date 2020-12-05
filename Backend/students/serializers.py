from rest_framework import serializers
from students.models import Student, Student_Classroom

class StundentSubjectSerializer(serializers.ModelSerializer):
    studentName = serializers.CharField(source='studentID.name', read_only=True)
    classroomName = serializers.CharField(source='classroomID.name',read_only=True)
    class Meta:
        model = Student_Classroom
        fields = ('studentID', 'classroomID','classroomName' , 'studentName')

class StudentCreateSerializer(serializers.ModelSerializer):
    classes = StundentSubjectSerializer(many=True, read_only=True)
    class Meta:
        model = Student
        fields = ("userID", "schoolID" ,"classes")
