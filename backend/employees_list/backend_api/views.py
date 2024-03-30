from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from .models import Employee
from .serializer import EmloyeeSerializer
from rest_framework.response import Response
# Create your views here.

class EmployeeView(GenericAPIView):
    def get(self, request):
        output = [
            {
                'Name': output.name, 
                'Email': output.email, 
                'Birth date': output.birth_date, 
                'Position': output.position,
                'Gender': output.gender,
                'Technology': output.technology,
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