from django.urls import path

from .views import EmployeeGetAllView, EmployeeGetView, EmployeePostView, EmployeeDeleteView, EmployeePatchView

urlpatterns = [
    path('', EmployeeGetAllView.as_view()),
    path('', EmployeePostView.as_view()),
    path('<uuid:id>', EmployeeDeleteView.as_view()),
    path('<uuid:id>', EmployeeGetView.as_view()),
    path('<uuid:id>', EmployeePatchView.as_view()),
]
