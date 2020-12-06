from rest_framework import serializers
from teachers.models import Teacher, Teacher_Classroom

class TeacherClassroomsSerializer(serializers.ModelSerializer):
    teacherName = serializers.CharField(source='teacherID.name', read_only=True)
    classroomName = serializers.CharField(source='classroomID.name',read_only=True)
    class Meta:
        model = Teacher_Classroom
        fields = ('teacherID', 'classroomID','classroomName' , 'teacherName')


class TeacherCreateSerializer(serializers.ModelSerializer):
    subjectName = serializers.CharField(source="subjectID.name", read_only=True)
    schoolName = serializers.CharField(source="schoolID.name", read_only=True)
    username = serializers.CharField(source="userID.name", read_only=True)
    classrooms = TeacherClassroomsSerializer(many=True, read_only=True)
    class Meta:
        model = Teacher
        fields = ("userID", "schoolID", "subjectID" , "schoolName" , "subjectName", "username" , "classrooms")

