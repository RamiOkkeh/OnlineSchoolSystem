from django.contrib import admin
from posts.models import Post
from import_export.admin import ImportExportModelAdmin

# Register your models here.

# admin.site.register(Post)


@admin.register(Post)
class PostAdmin(ImportExportModelAdmin):
    pass