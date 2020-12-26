from django.urls import path
from .views import RegistroTermo, ListarTermos, AtualizarTermo, DeletarTermo
#from Home.urls import urlpatterns


urlpatterns = [
    path("RegistrarTermo/", RegistroTermo, name="RegistroTermo"),
    path("ListarTermos/", ListarTermos, name="ListarTermos"),
    path("AtualizarTermo/<int:id>/", AtualizarTermo, name="AtualizarTermo"),
    path("DeletarTermo/<int:id>/", DeletarTermo, name="DeletarTermo"),
]
