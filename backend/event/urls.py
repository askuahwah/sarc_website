# urls.py
from django.urls import path
from .views import EventView, EventAttendView, markAttendanceView

urlpatterns = [
    path('events/', EventView.as_view(), name='event_list'),
    path('events/<int:pk>/', EventAttendView.as_view(), name='event_attend'),
    path('events/mark-attendance/<int:pk>', markAttendanceView.as_view(), name='event_list'),
]
