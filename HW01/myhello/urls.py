from django.urls import path
from . import views

urlpatterns = [
    path('', views.HelloApiView.as_view(), name='index'),
    
    path('add/', views.add_post, name='add_post'),
    path('list/', views.list_post, name='list_post'),

    path('courselist/',views.courselist_post, name='courselist_post'),
    path('addcourse/',views.addcourse_post,name='addcourse_post'),
]