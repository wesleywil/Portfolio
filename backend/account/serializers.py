
from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Profile
from projects.serializers import ProjectSerializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email')

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    projects = ProjectSerializer(read_only = True, many=True)
    class Meta:
        model = Profile
        fields =('id', 'user', 'picture', 'github_link', 'projects')
