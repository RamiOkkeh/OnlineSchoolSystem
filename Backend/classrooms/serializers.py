from rest_framework import serializers
from classrooms.models import Classroom, Subjects_Classroom

class SubjectClassRoomSerializer(serializers.ModelSerializer):
    classRoomName = serializers.CharField(source='classroomID.name',read_only=True)
    SubjectName = serializers.CharField(source='subjectId.name',read_only=True)
    class Meta:
        model = Subjects_Classroom
        fields = ( 'classroomID','subjectId','classRoomName','SubjectName' )

class ClassroomCreateSerializer(serializers.ModelSerializer):
    subjects = SubjectClassRoomSerializer(many=True,read_only=True)
    class Meta:
        model = Classroom
        fields = ("schoolID", "name" ,'subjects')
