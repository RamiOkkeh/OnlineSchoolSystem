from django.urls import path, include
from exams.views import ExamList, assignFirstExam, assignSecondExam , assignFinalExam , assignFirstGrade, assignSecondGrade, assignFinalGrade


urlpatterns = [
    path("", ExamList.as_view()),
    path("assignFirstExam", assignFirstExam),
    path("assignSecondExam", assignSecondExam),
    path("assignFinalExam", assignFinalExam),
    path("assignFirstGrade", assignFirstGrade),
    path("assignSecondGrade", assignSecondGrade),
    path("assignFinalGrade", assignFinalGrade),
]
