from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$',views.index,name='index'),
    url(r'^academic/$',views.academic,name='academic'),
    url(r'^certification/$',views.certification,name='certification'),
    url(r'^resume/$',views.resume,name='resume'),
    url(r'^contact/$',views.contact,name='contact'),
    url(r'^project/$',views.project,name='project'),
    url(r'^coming/$',views.coming,name='coming'),
]
