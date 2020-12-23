from django.urls import path, include
from principals.views import PrincipalList, details


urlpatterns = [
    path("", PrincipalList.as_view()),
    path("details", details)
]
