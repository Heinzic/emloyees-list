from django.shortcuts import render
from rest_framework.views import APIView
from .models import YoutubeVideo
from .serializer import YoutubeVideoSerializer
from rest_framework.response import Response
# Create your views here.

class YoutubeVideoView(APIView):
    def get(self, request):
        output = [
            {
                "title": output.title,
                "channel": output.channel
            } for output in YoutubeVideo.objects.all()
        ]
        return Response(output)
    def post(self, req):
        serializer = YoutubeVideoSerializer(data = req.data)
        if serializer.is_valid(raise_exception = True):
            serializer.save()
            return Response(serializer.data)