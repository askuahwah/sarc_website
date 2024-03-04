from rest_framework_simplejwt.views import TokenRefreshView
from django.urls import path
from api import views

urlpatterns = [
    path("token/", views.MyTokenObtainPairSerializer.as_view()),
    path("token/refresh", TokenRefreshView.as_view()),
    path("register/", views.RegisterView.as_view()),
    path("test/", views.testEndPoint, name="test"),
]