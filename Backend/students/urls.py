from django.urls import path, include
from students.views import StudentList


urlpatterns = [
    path("", StudentList.as_view()),
]
