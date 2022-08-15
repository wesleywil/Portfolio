from django.urls import path

from .views import (
    ProjectView,
    ProjectDetailsView,
    TagView,
    TagDetailsView
)

app_name = "project_api"

urlpatterns =[
    path('projects/',ProjectView.as_view(), name='project_list'),
    path('projects/<int:pk>/',ProjectDetailsView.as_view(), name='project_details'),
    path('tags/', TagView.as_view(), name='tag_list'),
    path('tags/<int:pk>', TagDetailsView.as_view(), name='tag_details')
]