from django.urls import path, include
from subjects.views import SubjectList


urlpatterns = [
    path("", SubjectList.as_view()),
]
