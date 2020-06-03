from django.contrib import admin
from .models import Meeting

@admin.register(Meeting)
class MeetingAdmin(admin.ModelAdmin):
    model = Meeting
    #list_display = ['title', 'tutor', 'get_short_link', 'deskoplagem', 'admin_thumbnail']
    #list_filter = ('participants', )
    filter_horizontal = ('participants', )


   
