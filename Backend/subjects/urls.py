from django.urls import path, include
from subjects.views import SubjectList, getSchoolSubjects


urlpatterns = [
    path("", SubjectList.as_view()),
    path("getSchoolSubjects", getSchoolSubjects)
]
