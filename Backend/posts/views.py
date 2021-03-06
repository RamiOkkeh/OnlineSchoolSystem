from django.shortcuts import render
from rest_framework import generics
from posts.serializers import PostCreateSerializer
from posts.models import Post

# Create your views here.
class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostCreateSerializer
