from django.urls import path, include
from teachers.views import TeacherList, details


urlpatterns = [
    path("", TeacherList.as_view()),
    path("details", details)
]
