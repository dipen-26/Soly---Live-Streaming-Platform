from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register_user, name='register'),  # ✅ changed from 'signup'
    path('login/', views.login_user, name='login'),
]
