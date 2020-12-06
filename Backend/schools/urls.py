from django.urls import path, include
from schools.views import SchoolList


urlpatterns = [
    path("", SchoolList.as_view()),
]
