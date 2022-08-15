from django.shortcuts import render
from django.http import Http404
from rest_framework.views import APIView
from rest_framework import status, permissions
from rest_framework.response import Response

from .models import Project, Tag
from .serializers import ProjectSerializer, TagSerializer

class ProjectView(APIView):
    permissions_classes = [permissions.IsAuthenticatedOrReadOnly,]
    def get(self, request, format=None):
        queryset = Project.objects.all()
        serializer = ProjectSerializer(queryset, many=True, context={"request":request})
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ProjectSerializer(data=request.data, context={"request":request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

class ProjectDetailsView(APIView):
    permissions_classes = [permissions.IsAuthenticated]

    def get_object(self, pk):
        try:
            return Project.objects.get(pk=pk)
        except Project.DoesNotExist:
            return Http404
    def get(self, request, pk, format=None):
        project = self.get_object(pk)
        serializer = ProjectSerializer(project, context={"request":request})
        return Response(serializer.data)
    def put(self, request, pk, format=None):
        project = self.get_object(pk)
        serializer = ProjectSerializer(project, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    def delete(self, request, pk, format = None):
        project = self.get_object(pk)
        project.delete()
        return Response(status = status.HTTP_204_NO_CONTEXT)

class TagView(APIView):
    permissions_classes = [permissions.IsAuthenticatedOrReadOnly,]
    def get(self, request, format=None):
        queryset = Tag.objects.all()
        serializer = TagSerializer(queryset, many=True, context={"request":request})
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TagSerializer(data=request.data, context={"request":request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

class TagDetailsView(APIView):
    permissions_classes = [permissions.IsAuthenticated]

    def get_object(self, pk):
        try:
            return Tag.objects.get(pk=pk)
        except Project.DoesNotExist:
            return Http404
    def get(self, request, pk, format=None):
        tag = self.get_object(pk)
        serializer = TagSerializer(tag, context={"request":request})
        return Response(serializer.data)
    def put(self, request, pk, format=None):
        tag = self.get_object(pk)
        serializer = TagSerializer(tag, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    def delete(self, request, pk, format = None):
        tag = self.get_object(pk)
        tag.delete()
        return Response(status = status.HTTP_204_NO_CONTEXT)
