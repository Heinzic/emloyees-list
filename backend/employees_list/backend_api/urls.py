from django.urls import path

from .views import EmployeeGetAllView, EmployeeGetView

urlpatterns = [
    path('', EmployeeGetAllView.as_view()),
    path('<uuid:id>', EmployeeGetView.as_view()),
]
