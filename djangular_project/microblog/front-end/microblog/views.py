from django.shortcuts import render
from django.contrib.auth.models import Group
from rest_framework import viewsets, permissions,generics
from rest_framework.response import Response
from .models import BlogPost, User
from . import serializers
from .permissions import ReadOnly


def index(request, path=''):
    """
    The home page. This renders the container for the single-page app.

    """
    return render(request, 'index.html')

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = ( permissions.IsAuthenticatedOrReadOnly,)

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = ( permissions.IsAdminUser,)

class UserCreationView(generics.ListCreateAPIView):
    queryset = {}
    permission_classes = ( permissions.IsAdminUser,)
    serializer_class = serializers.UserCreateSerializer





class BlogPostViewSet(viewsets.ModelViewSet):
    """
    Provides basic CRUD functions for the Blog Post model
    """
    queryset = BlogPost.objects.all()
    serializer_class = serializers.BlogPostSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)




#
# class GroupViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows groups to be viewed or edited.
#     """
#     queryset = Group.objects.all()
#     serializer_class = serializers.GroupSerializer
#     permission_classes = (permissions.IsAdminUser, )
