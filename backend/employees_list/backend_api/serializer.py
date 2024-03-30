from rest_framework import serializers
from .models import Employee

class EmloyeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['name', 
                  'email', 
                  'birth_date', 
                  'position',
                  'gender',
                  'technology'
                  ]