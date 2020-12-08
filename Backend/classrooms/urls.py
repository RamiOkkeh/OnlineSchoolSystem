from django.urls import path, include
from classrooms.views import ClassroomList,getClass, getSchoolClasses


urlpatterns = [
    path("", ClassroomList.as_view()),
    path('class' ,getClass ),
    path('getSchoolClasses', getSchoolClasses)
]
