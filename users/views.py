from django.shortcuts import render
from rest_framework import generics
from users.serializers import UserIdSerializer
from users.models import UserAccount
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.


class UsersList(generics.ListCreateAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserIdSerializer

@api_view(['POST'])
def uploadImg(request):
    print(">>>>>>>>>>>>>>")
    print(request.data)
    UserAccount.objects.filter(pk=request.data['userID']).update(img=request.data['img'])
    return Response({"success": True})