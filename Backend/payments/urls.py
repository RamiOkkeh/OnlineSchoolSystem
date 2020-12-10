from django.urls import path, include
from payments.views import PaymentList, addPayment, checkout


urlpatterns = [
    path("", PaymentList.as_view()),
    path("addPayment", addPayment),
    path("checkout", checkout)
]
