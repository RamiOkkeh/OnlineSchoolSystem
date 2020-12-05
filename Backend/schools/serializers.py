from rest_framework import serializers
from schools.models import School


class SchoolCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = ("name", "address")
