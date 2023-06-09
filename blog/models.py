from django.db import models
import uuid
from ckeditor.fields import RichTextField


class Blog(models.Model):
    id = models.UUIDField(
        primary_key = True,
         default=uuid.uuid4,
         editable=False
    )
    author = models.CharField(max_length=100, default="admin")
    title = models.CharField(max_length=300)
    content = RichTextField()
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title

    
    
# TODO:
# add draft
# install black
    