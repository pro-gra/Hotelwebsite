from django.shortcuts import render
from django.views.generic import TemplateView,CreateView
from django.urls import reverse_lazy
from .models import Emails
# Create your views here.

class home(CreateView) : 
     template_name = 'homepage.html'
     model = Emails
     success_url = reverse_lazy('THANKYOU') 
     fields=['email']

class about(CreateView) : 
     template_name = 'about.html'
     model = Emails
     success_url = reverse_lazy('THANKYOU') 
     fields=['email']

class locali(CreateView) : 
     template_name = 'localisuggerriti.html'
     model = Emails
     success_url = reverse_lazy('THANKYOU') 
     fields=['email']

class gallery(CreateView) : 
     template_name = 'gallery.html'
     model = Emails
     success_url = reverse_lazy('THANKYOU') 
     fields=['email']

class restaurant(CreateView) :
     template_name = 'restaurant.html'
     model = Emails
     success_url = reverse_lazy('THANKYOU') 
     fields=['email'] 

class services(CreateView) : 
    template_name = 'services.html'
    model = Emails
    success_url = reverse_lazy('THANKYOU') 
    fields=['email']

class biketour(CreateView) : 
    template_name = 'bike-tour.html'
    model = Emails
    success_url = reverse_lazy('THANKYOU') 
    fields=['email']

class laromantica(CreateView) : 
    template_name = 'laromantica.html'
    model = Emails
    success_url = reverse_lazy('THANKYOU') 
    fields=['email']

class leden(CreateView) : 
    template_name = 'leden.html'
    model = Emails
    success_url = reverse_lazy('THANKYOU') 
    fields=['email']

class larustica(CreateView) : 
    template_name = 'larustica.html'
    model = Emails
    success_url = reverse_lazy('THANKYOU') 
    fields=['email']

class bellavista(CreateView) : 
    template_name = 'bellavista.html'
    model = Emails
    success_url = reverse_lazy('THANKYOU') 
    fields=['email']

class laromantica(CreateView) : 
    template_name = 'laromantica.html'
    model = Emails
    success_url = reverse_lazy('THANKYOU') 
    fields=['email']

class baciatadalsole(CreateView) : 
    template_name = 'baciatadalsole.html'
    model = Emails
    success_url = reverse_lazy('THANKYOU') 
    fields=['email']

class garden(CreateView) : 
    template_name = 'garden.html'
    model = Emails
    success_url = reverse_lazy('THANKYOU') 
    fields=['email']

class thankyou(TemplateView) : 
     template_name='thankyou.html'
