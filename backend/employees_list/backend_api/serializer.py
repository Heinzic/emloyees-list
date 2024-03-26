from rest_framework import serializers
from .models import Employee

class EmloyeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['Name', 
                  'Email', 
                  'Birth date', 
                  'Position',
                  'Gender',
                  'Technology'
                  ]