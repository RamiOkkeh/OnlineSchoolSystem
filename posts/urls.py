from django.urls import path, include
from posts.views import PostList


urlpatterns = [
    path("", PostList.as_view()),
]
