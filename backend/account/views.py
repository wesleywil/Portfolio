from django.shortcuts import render
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import  Token
from rest_framework.views import APIView
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)

from .models import Profile
from .serializers import ProfileSerializer


class LoginView(APIView):
    permission_classes = [permissions.AllowAny,]
    @csrf_exempt
    def post(self, request, format=None):
        username = request.data.get("username")
        password = request.data.get("password")
        if username is None or password is None:
            return Response({'error': 'Please provide both username and password'},
            status = HTTP_400_BAD_REQUEST)
        user = authenticate(username=username, password=password)
        if not user:
            return Response({'error':'Invalid Credentials'},
            status = HTTP_404_NOT_FOUND)
        token,_ = Token.objects.get_or_create(user=user)
        return Response({'token':token.key}, status=HTTP_200_OK)

    


class ProfilDetailView(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,]
    def get(self, request, format=None):
        profile = Profile.objects.get(pk = 1)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)
        