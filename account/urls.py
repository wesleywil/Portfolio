from django.urls import path

from .views import (
    ProfilDetailView,
)

app_name = "account_api"

urlpatterns =[
    path('profile/',ProfilDetailView.as_view(), name='profile_details'),
]