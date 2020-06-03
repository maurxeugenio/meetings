from .models import Meeting
from rest_framework import status
from rest_framework.views import APIView
from .serializers import MeetingSerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


class MeetingsView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = MeetingSerializer

    def get(self, request):
        serializer = self.serializer_class(Meeting.objects.all(), many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
