from rest_framework import serializers
from teachers.models import Teacher, Teacher_Classroom

class TeacherClassroomsSerializer(serializers.ModelSerializer):
    classroomName = serializers.CharField(source='classroomID.name',read_only=True)
    class Meta:
        model = Teacher_Classroom
        fields = ('classroomID','classroomName')


class TeacherCreateSerializer(serializers.ModelSerializer):
    subjectName = serializers.CharField(source="subjectID.name", read_only=True)
    schoolName = serializers.CharField(source="schoolID.name", read_only=True)
    teacherName = serializers.CharField(source="userID.name", read_only=True)
    classrooms = TeacherClassroomsSerializer(many=True, read_only=True)
    class Meta:
        model = Teacher
        fields = ("userID", "teacherName" , "schoolID", "schoolName" , "subjectID" , "subjectName", "classrooms")

