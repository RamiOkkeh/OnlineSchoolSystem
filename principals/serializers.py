from rest_framework import serializers
from principals.models import Principal

class PrincipalCreateSerializer(serializers.ModelSerializer):
    principalName = serializers.CharField(source='userID.name', read_only=True)
    schoolName = serializers.CharField(source='schoolID.name', read_only=True)

    class Meta:
        model = Principal
        fields = ("userID","principalName" , "schoolID" , "schoolName")
