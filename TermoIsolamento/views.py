from django.shortcuts import render
from .forms import IsolamentoForm
from .models import TermoIsolamento
from django.contrib import messages

from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404, redirect, render
from Home.urls import home


@login_required
def RegistroTermo(request):
    form = IsolamentoForm(request.POST or None)
    if(form.is_valid()):
        form.save()
        messages.success(request, 'Termo de Isolamento Registrado com Sucesso!')
        return redirect('../ListarTermos')
    return render(request, 'registroTermo/RegistrarTermo.html', {'form': form})


@login_required
def ListarTermos(request):
    termos = TermoIsolamento.objects.all().values()
    return render(request, 'listagemTermos/ListarTermos.html', {'termos': termos})

@login_required
def AtualizarTermo(request):
    termo = get_object_or_404(TermoIsolamento, pk=id)
    form = IsolamentoForm(request.POST or None, instance=termo)
    if(form.is_valid()):
        form.save()
        return redirect('../../ListarTermos')
    return render(request, 'registroTermo/RegistrarTermo.html', {'form': form})
    
@login_required
def DeletarTermo(request, id):
    termoDelete = get_object_or_404(TermoIsolamento, pk=id)
    termoDelete.delete()
    return redirect('../../ListarTermos')
