from multiprocessing import context
from rest_framework.views import APIView
from rest_framework.views import Response 

from .models import Reconocimiento
from .serializers import ReconocimientoSerializer

class IndexView(APIView):
    def get (self, request):
        context = {'mensaje':'servidor activo'}
        return Response(context)

class ReconocimientoView(APIView):
    
    def get(self,request):
        dataReconocimiento = Reconocimiento.objects.all()
        serReconocimiento = ReconocimientoSerializer(dataReconocimiento,many=True)
        return Response(serReconocimiento.data)
    
    def post(self,request):
        ser = ReconocimientoSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        ser.save()
        
        return Response(ser.data)
    
class ReconocimientoDetailView(APIView):
    
    def get(self,request,id):
        data = Reconocimiento.objects.get(pk=id)
        ser = ReconocimientoSerializer(data)
        return Response(ser.data)
    
    def put(self,request,id):
        data = Reconocimiento.objects.get(pk=id)
        ser = ReconocimientoSerializer(data,data=request.data)
        ser.is_valid(raise_exception=True)
        ser.save()
        return Response(ser.data)
    
    def delete(self,request,id):
        data = Reconocimiento.objects.get(pk=id)
        ser = ReconocimientoSerializer(data)
        data.delete()
        return Response(ser.data)