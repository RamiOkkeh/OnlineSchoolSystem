from django.urls import path, include
from exams.views import ExamList, assignFirstExam, assignSecondExam , assignFinalExam , assignFirstGrade, assignSecondGrade, assignFinalGrade, details, stats


urlpatterns = [
    path("", ExamList.as_view()),
    path("assignfirstExam", assignFirstExam),
    path("assignsecondExam", assignSecondExam),
    path("assignfinalExam", assignFinalExam),
    path("assignFirstGrade", assignFirstGrade),
    path("assignSecondGrade", assignSecondGrade),
    path("assignFinalGrade", assignFinalGrade),
    path("details", details),
    path("stats", stats),
]
