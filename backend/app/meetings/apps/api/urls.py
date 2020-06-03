from django.urls import path
from .views import MeetingsView
from rest_framework.authtoken.views import obtain_auth_token
# from rest_framework_simplejwt import views as jwt_views


urlpatterns = [
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
    path('meetings', MeetingsView.as_view()),
]
