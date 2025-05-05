from django.urls import path
from .views import home,about,locali,gallery,restaurant, services, thankyou,biketour,laromantica,larustica,leden,bellavista,baciatadalsole,garden


urlpatterns = [
    path('',home.as_view() , name='HOMEPAGE'),
    path('about/',about.as_view(),name='ABOUT'),
    path('Escursioni/',locali.as_view(),name='LOCALLI'),
    path('Gallery/',gallery.as_view(),name='GALLERY'),
    path('Locali-suggeriti/',restaurant.as_view(),name='RESTAURANT'),
    path('Servizi/',services.as_view(),name='SERVIZI'),
    path('thankyou/',thankyou.as_view(),name='THANKYOU'),
    path('Noleggioe-bike/',biketour.as_view(),name='BIKETOUR'),
    path('la-romantica/',laromantica.as_view(),name='LAROMANTICA'),
    path('leden/',leden.as_view(),name='LEDEN'),
    path('bellavista/',bellavista.as_view(),name='BELLAVISTA'),
    path('larustica/',larustica.as_view(),name='LARUSTICA'),
    path('baciatadalsole/',baciatadalsole.as_view(),name='BACIATADALSOLE'),
    path('garden/',garden.as_view(),name='GARDEN')









]
