from django.urls import path, include
from parents.views import ParentList, details


urlpatterns = [
    path("", ParentList.as_view()),
    path("details", details)
]