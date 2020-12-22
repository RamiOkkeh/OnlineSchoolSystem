from djoser.serializers import UserCreateSerializer, UserSerializer
from rest_framework import serializers
from users.models import UserAccount


class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = UserAccount
        fields = ("id", "email", "name", "password", "role", "img")

class UserIdSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ("id", "email", "name", "role", "img")
