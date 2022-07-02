from attr import *
from rest_framework import serializers
from .models import Reconocimiento

class ReconocimientoSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Reconocimiento
        fields=('__all__')
        