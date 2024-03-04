# views.py
from django.http import JsonResponse
from rest_framework.generics import ListCreateAPIView, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Event
from .serializer import EventSerializer
from rest_framework.permissions import IsAuthenticated

class EventView(ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class EventAttendView(APIView):
    print('HI')
    def post(self, request, pk):
        print("somethin");
        event = get_object_or_404(Event, pk=pk)
        user = self.request.user

        if user in event.attendees.all():
            event.attendees.remove(user)
        else:
            event.attendees.add(user)
            

        serializer = EventSerializer(event)
        return Response(serializer.data, status=status.HTTP_200_OK)


class markAttendanceView(APIView):
    print('Hi there')
    permission_classes = [IsAuthenticated]

    def post(self, request, pk):
        print("somethin");
        user = self.request.user
        event = get_object_or_404(Event, id=int(pk))
        print(event)
        event.attendees.add(user)
        event.save()
        # user = self.request.user

        # if user in event.attendees.all():
        #     event.attendees.remove(user)
        # else:
        #     event.attendees.add(user)
            

        
        return JsonResponse({
            "success": True
        }, status=status.HTTP_200_OK)

