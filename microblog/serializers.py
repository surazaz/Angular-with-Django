from django.contrib.auth import password_validation
from django.contrib.auth.forms import UserCreationForm, UsernameField
from django.contrib.auth.models import Group
from django import forms
from rest_framework import serializers
from rest_framework import mixins

from .models import User
from .models import BlogPost
import re

def validate(password):
    if len(password) < 8:
        return "Make sure your password is at lest 8 letters"
    elif re.search('[0-9]',password) is None:
        return "Make sure your password has a number in it"
    elif re.search('[A-Z]',password) is None:
        return "Make sure your password has a capital letter in it"
    else:
        return "OK"





class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name','last_name','email')


class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email','password')
    def create(self, validated_data):
        password=validated_data['password']
        if validate(password)=="OK":
            user=User.objects.create_user(**validated_data)
            return user
        else:
            print(validate(password))
            return validate(password)


class BlogPostSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(many=False)

    class Meta:
        model = BlogPost
        fields = ('id', 'user', 'date', 'body')

# class GroupSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Group
#         fields = ('url', 'name')