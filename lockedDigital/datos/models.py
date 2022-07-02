from django.db import models

class Reconocimiento(models.Model):
    fotoReconocimiento = models.ImageField(blank='',default='', upload_to='fotos/')
    codigoReconocimiento = models.CharField(max_length=100, null=True) 
    Hora = models.TimeField()
