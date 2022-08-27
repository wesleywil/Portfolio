from rest_framework import serializers

from .models import Project, Tag

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag 
        fields = ('id', 'title', 'description')

class ProjectSerializer(serializers.ModelSerializer):
    tags = TagSerializer(read_only=True, many=True)
    class Meta:
        model = Project
        fields = ('id', 'title', 'image', 'description', 'link', 'tags', 'personal')

class ProjectNoImageSerializer(serializers.ModelSerializer):
    tags = serializers.PrimaryKeyRelatedField(many=True, queryset = Tag.objects.all())
    class Meta:
        model = Project
        fields = ('id', 'title', 'description', 'link', 'tags', 'personal')