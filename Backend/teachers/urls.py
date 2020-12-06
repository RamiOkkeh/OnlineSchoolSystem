from django.urls import path, include
from teachers.views import TeacherList


urlpatterns = [
    path("", TeacherList.as_view()),
]
