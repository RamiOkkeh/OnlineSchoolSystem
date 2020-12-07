from django.shortcuts import render
from rest_framework import generics
from users.serializers import UserIdSerializer
from users.models import UserAccount

# Create your views here.


class UsersList(generics.ListCreateAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserIdSerializer
