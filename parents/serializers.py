from rest_framework import serializers
from parents.models import Parent
from students.serializers import StudentCreateSerializer

class ParentCreateSerializer(serializers.ModelSerializer):
    schoolName = serializers.CharField(source="schoolID.name", read_only=True)
    studentName = serializers.CharField(source="studentID.userID.name", read_only=True)
    studentUserID = serializers.IntegerField(source="studentID.userID.pk", read_only=True)
    
    class Meta:
        model = Parent
        fields = ("userID","studentID" , "studentName" , "schoolID", "schoolName","studentUserID")

