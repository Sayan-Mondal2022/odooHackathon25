from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path('ask/', views.ask_question, name='query'),
    path('question/<int:pk>/', views.question_detail, name='question_detail'),
]