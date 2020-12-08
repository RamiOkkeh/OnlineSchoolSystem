from django.urls import path, include
from classrooms.views import ClassroomList


urlpatterns = [
    path("", ClassroomList.as_view()),
]
