from .models import Meeting
from rest_framework import serializers


class MeetingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meeting
        fields = ['name', 'get_image_url', 'date', 'description']
