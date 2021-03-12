from django.urls import path, include
from users.views import UsersList, uploadImg


urlpatterns = [
    path("", UsersList.as_view()),
    path("uploadImg", uploadImg)
]
