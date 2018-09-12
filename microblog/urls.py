from django.conf.urls import url
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token
from rest_framework import routers


from . import views
router = routers.DefaultRouter(trailing_slash=False)
router.register(r'posts', views.BlogPostViewSet)


urlpatterns = [
	path(r'api/',include(router.urls)),
    path('api-token-auth/', obtain_jwt_token),
    path('api-token-refresh/', refresh_jwt_token),
    path('api/user-creation', views.UserCreationView.as_view()),
    path('api/users', views.UserList.as_view()),
    url(r'^api/users/(?P<pk>[0-9]+)/$', views.UserDetail.as_view()),
    path('',views.index),
    url(r'^.*/$', views.index),


]


