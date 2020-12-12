from rest_framework import serializers
from classrooms.models import Classroom, Subjects_Classroom
from students.serializers import StudentCreateSerializer

class SubjectClassRoomSerializer(serializers.ModelSerializer):
    SubjectName = serializers.CharField(source='subjectId.name',read_only=True)
    class Meta:
        model = Subjects_Classroom
        fields = ('subjectId','SubjectName' )

class ClassroomCreateSerializer(serializers.ModelSerializer):
    subjects = SubjectClassRoomSerializer(many=True,read_only=True)
    students = StudentCreateSerializer(many=True,read_only=True)
    class Meta:
        model = Classroom
        fields = ('id',"schoolID", "name" ,'subjects', 'students' , 'schedule')
