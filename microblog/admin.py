from django.contrib import admin
from .models import BlogPost,User
admin.site.register(User)
@admin.register(BlogPost)
class PostAdmin(admin.ModelAdmin):
    list_display = ('user', 'date', 'body')
ordering = ['-date']

# Register your models here.
