from django.shortcuts import render
from .forms import PacienteForm
from .models import Paciente
from django.contrib import messages

from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404, redirect, render
from Home.urls import home


@login_required
def RegistroTermo(request):
    form = PacienteForm(request.POST or None)
    if(form.is_valid()):
        form.save()
        messages.success(request, 'Termo de Isolamento Registrado com Sucesso!')
        return redirect('../ListarTermos')
    return render(request, 'registroTermo/content.html', {'form': form})


@login_required
def ListarTermos(request):
    pacientes = Paciente.objects.all().values()
    return render(request, 'listagemTermos/ListarTermos.html', {'pacientes': pacientes})

@login_required
def AtualizarTermo(request):
    paciente = get_object_or_404(Paciente, pk=id)
    listaSintomas - list(Paciente.sintomas)
    listaCondicoes - list(Paciente.condicoes)
    form = PacienteForm(request.POST or None, instance=paciente)
    if(form.is_valid()):
        form.save()
        return redirect('../../ListarTermos')
    return render(
        request,
        'listagemTermos/ListarTermos.html', {
            'paciente': paciente,
            'listSintomas': listaSintomas,
            'listCondicoes': listaCondicoes
        }
    )
    return render(request, 'registroTermo/content.html', {'form': form})
    
@login_required
def DeletarTermo(request, id):
    pacienteDelete = get_object_or_404(Paciente, pk=id)
    pacienteDelete.delete()
    return redirect('../../ListarTermos')
