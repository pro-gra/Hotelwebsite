from django.db import models

# Create your models here.
class Emails(models.Model) : 
    email = models.EmailField(default='example@example.com')


def __str__(self):
    return self.email
