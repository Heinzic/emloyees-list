from django.urls import path

from .views import EmployeeGetAllView, EmployeeGetView, EmployeePostView, EmployeeDeleteView, EmployeePatchView

urlpatterns = [
    path('get/', EmployeeGetAllView.as_view()),
    path('post/', EmployeePostView.as_view()),
    path('delete/<uuid:id>', EmployeeDeleteView.as_view()),
    path('<uuid:id>', EmployeeGetView.as_view()),
    path('patch/<uuid:id>', EmployeePatchView.as_view()),
]
