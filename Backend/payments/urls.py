from django.urls import path, include
from payments.views import PaymentList


urlpatterns = [
    path("", PaymentList.as_view()),
]
