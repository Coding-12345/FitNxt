# myapp/serializers.py
from rest_framework import serializers
from .models import register

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = register
        fields = ['name', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}