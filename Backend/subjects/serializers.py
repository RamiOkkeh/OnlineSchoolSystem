from rest_framework import serializers
from subjects.models import Subject

class SubjectCreateSerializer(serializers.ModelSerializer):
    schoolName = serializers.CharField(source='schoolID.name', read_only=True)
    class Meta:
        model = Subject
        fields = ("id", "name","schoolID", "schoolName")
