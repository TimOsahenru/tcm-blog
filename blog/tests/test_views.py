from django.test import TestCase
from django.urls import reverse
from blog.models import Blog
from datetime import datetime


class TestBlogListViews(TestCase):
    def setUp(self):
        self.blog_data = [
            Blog(author="admin", title="Blog 1", content="Dummy text 1...", created=datetime.now()),
            Blog(author="admin", title="Blog 2", content="Dummy text 2...", created=datetime.now()),
            Blog(author="admin", title="Blog 3", content="Dummy text 3...", created=datetime.now()),
            Blog(author="admin", title="Blog 4", content="Dummy text 4...", created=datetime.now()),
            Blog(author="admin", title="Blog 5", content="Dummy text 5...", created=datetime.now())
        ]
        blogs = Blog.objects.bulk_create(self.blog_data)
        
        
    def test_blog_list_view(self):
        url = reverse("blogs")
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(Blog.objects.count(), len(self.blog_data))