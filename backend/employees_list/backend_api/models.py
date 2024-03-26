from django.db import models

# Create your models here.
class Employee(models.Model):
    
    POSITION = (
        (Frontend, 'Frontend-разработчик'),
        (Backend, 'Frontend-разработчик'),
        (Analyst, 'Frontend-разработчик'),
        (Manager, 'Frontend-разработчик'),
        (Designer, 'Frontend-разработчик'),
    )
    
    GENDER = (
        (Male, 'Мужчина'),
        (Female, 'Женщина'),
    )
    
    TECHNOLOGY = (
        (CSharp, 'C#'),
        (React, 'React'),
        (Java, 'Java'),
        (PHP, 'PHP'),
        (Figma, 'Figma'),
        (Word, 'Word'),
    )
    
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    birth_date = models.DateField()
    
    position = models.CharField(max_length=50, choices = POSITION)
    gender = models.CharField(max_length=50, choices = GENDER)
    technology = models.CharField(max_length=50, choices = TECHNOLOGY)