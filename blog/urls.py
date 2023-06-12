from django.urls import path
from .views import BlogListView, BlogDetailView

urlpatterns = [
    path("", BlogListView.as_view(), name="blogs"),
    path("blog<str:pk>/", BlogDetailView.as_view(), name="blog")
    
]