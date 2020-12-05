from rest_framework import serializers
from teachers.models import Teacher


class TeacherCreateSerializer(serializers.ModelSerializer):
    subjectName = serializers.CharField(source="subjectID.name", read_only=True)
    schoolName = serializers.CharField(source="schoolID.name", read_only=True)
    username = serializers.CharField(source="userID.name", read_only=True)
    class Meta:
        model = Teacher
        fields = ("userID", "schoolID", "subjectID" , "schoolName" , "subjectName", "username")
