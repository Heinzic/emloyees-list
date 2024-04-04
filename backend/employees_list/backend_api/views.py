from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from .models import Employee
from .serializer import EmloyeeSerializer
from rest_framework.response import Response
# Create your views here.

class EmployeeGetAllView(GenericAPIView):
    def get(self, request):
        output = [
            {
                'id': output.id,
                'Name': output.name, 
                'Email': output.email, 
                'Birth date': output.birth_date, 
                'Position': output.position,
                'Gender': output.gender,
                'Technology': output.technology,
            } for output in Employee.objects.all()
        ]
        
        return Response(output)
        
    def get_serializer_class(self):
        return EmloyeeSerializer
    
class EmployeePostView(GenericAPIView):
    def post(self, req):
        serializer = EmloyeeSerializer(data = req.data)
        if serializer.is_valid(raise_exception = True):
            serializer.save()
            return Response(serializer.data)
        
    def get_serializer_class(self):
        return EmloyeeSerializer
    
class EmployeeDeleteView(GenericAPIView):
    model = Employee
    
    def delete(self, req, id):
        Employee.objects.filter(id = id).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        
    def get_serializer_class(self):
        return EmloyeeSerializer