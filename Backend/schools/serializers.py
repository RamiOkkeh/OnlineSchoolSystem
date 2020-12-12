from rest_framework import serializers
from schools.models import School
from students.serializers import StudentCreateSerializer
from classrooms.serializers import ClassroomCreateSerializer


class SchoolCreateSerializer(serializers.ModelSerializer):
    classrooms = ClassroomCreateSerializer(many=True,read_only=True)
    students = StudentCreateSerializer(many=True,read_only=True)
    class Meta:
        model = School
        fields = ("id" ,"name", "address", "schoolCode", "classrooms" ,"students")
