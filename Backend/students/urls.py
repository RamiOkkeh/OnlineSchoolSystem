from django.urls import path, include
from students.views import StudentList, assignClass


urlpatterns = [
    path("", StudentList.as_view()),
    path("assignClass", assignClass)
]
