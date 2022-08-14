from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status, permissions
from rest_framework.response import Response

from .models import Profile
from .serializers import ProfileSerializer

class ProfilDetailView(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,]
    def get(self, request, format=None):
        profile = Profile.objects.get(pk = 1)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)
        