from django.urls import path

from .views import (
    LoginView,
    ProfilDetailView,
)

app_name = "account_api"

urlpatterns =[
    path('login/', LoginView.as_view(), name='login'),
    path('profile/',ProfilDetailView.as_view(), name='profile_details'),
    
]