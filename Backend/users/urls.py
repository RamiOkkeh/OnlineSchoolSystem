from django.urls import path, include
from users.views import UsersList


urlpatterns = [
    path("", UsersList.as_view()),
]
