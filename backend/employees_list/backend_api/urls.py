from django.urls import path

from .views import EmployeeGetAllView, EmployeePostView, EmployeeDeleteView

urlpatterns = [
    path('get/', EmployeeGetAllView.as_view()),
    path('post/', EmployeePostView.as_view()),
    path('delete/<uuid:id>', EmployeeDeleteView.as_view()),

]
