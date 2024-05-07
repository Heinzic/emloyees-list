from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from .models import Employee
from .serializer import EmloyeeSerializer
from rest_framework.response import Response
# Create your views here.

class EmployeeGetAllView(GenericAPIView):
    http_method_names = ['get', 'post', 'head']
    def get(self, request):
        output = [
            {
                'id': output.id,
                'name': output.name, 
                'email': output.email, 
                'birth_date': output.birth_date, 
                'position': output.position,
                'gender': output.gender,
                'technology': output.technology,
            } for output in Employee.objects.all()
        ]
        
        return Response(output)
    
    def post(self, req):
        serializer = EmloyeeSerializer(data = req.data)
        if serializer.is_valid(raise_exception = True):
            serializer.save()
            return Response(serializer.data)
        
    def get_serializer_class(self):
        return EmloyeeSerializer
    
class EmployeeGetView(GenericAPIView):
    def get(self, request, id):
        output = [
            {
                'id': output.id,
                'name': output.name, 
                'email': output.email, 
                'birth_date': output.birth_date, 
                'position': output.position,
                'gender': output.gender,
                'technology': output.technology,
            } for output in Employee.objects.filter(id = id)
        ]
        
        return Response(output)
    
    def patch(self, req, id):
        employee = Employee.objects.filter(id = id).first()
        serializer = EmloyeeSerializer(employee, data = req.data, partial = True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(status=400, data="wrong parameters")
    
    def delete(self, req, id):
        Employee.objects.filter(id = id).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        
    def get_serializer_class(self):
        return EmloyeeSerializer
    