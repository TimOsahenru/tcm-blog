from django.shortcuts import render
from blog.models import Blog
from django.views.generic import ListView
from django.views.generic import DetailView


class BlogListView(ListView):
    model = Blog
    context_object_name = "blogs"
    template_name = "../templates/blog.html"
    
    
class BlogDetailView(DetailView):
    model = Blog
    template_name = "../templates/detail.html"