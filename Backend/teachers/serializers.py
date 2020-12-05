from rest_framework import serializers
from teachers.models import Teacher


class TeacherCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ("userID", "schoolID", "subjectID")
