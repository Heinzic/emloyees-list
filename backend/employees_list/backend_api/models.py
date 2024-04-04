import uuid
from django.db import models

# Create your models here.
class Employee(models.Model):
    
    Frontend = 'FE'
    Backend = 'BE'
    Analyst = 'AN'
    Manager = "MN"
    Designer = 'DS'
    
    POSITION = (
        (Frontend, 'Frontend-разработчик'),
        (Backend, 'Frontend-разработчик'),
        (Analyst, 'Frontend-разработчик'),
        (Manager, 'Frontend-разработчик'),
        (Designer, 'Frontend-разработчик'),
    )
    
    Male = 'M'
    Female = 'F'
    
    GENDER = (
        (Male, 'Мужчина'),
        (Female, 'Женщина'),
    )
    
    CSharp = 'CS'
    React = 'RT'
    Java = 'JV'
    PHP = 'PH'
    Figma = 'FG'
    Word = 'WD'
    
    TECHNOLOGY = (
        (CSharp, 'C#'),
        (React, 'React'),
        (Java, 'Java'),
        (PHP, 'PHP'),
        (Figma, 'Figma'),
        (Word, 'Word'),
    )
    
    id = models.UUIDField( 
         primary_key = True, 
         default = uuid.uuid4, 
         editable = False) 
    
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    birth_date = models.DateField()
    
    position = models.CharField(max_length=50, choices = POSITION)
    gender = models.CharField(max_length=50, choices = GENDER)
    technology = models.CharField(max_length=50, choices = TECHNOLOGY)
    
    def __str__(self):
        return self.name