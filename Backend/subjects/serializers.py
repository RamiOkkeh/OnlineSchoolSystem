from rest_framework import serializers
from subjects.models import Subject

class SubjectCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ("schoolID","name")
