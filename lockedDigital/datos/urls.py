from django.urls import path
from . import views
urlpatterns = [
    path('',views.IndexView.as_view(),name='index'),
    path('reconocimiento',views.ReconocimientoView.as_view(),name='reconocimiento'),
    path('reconocimiento/<int:id>',views.ReconocimientoDetailView.as_view(),name='Detalles')
]
