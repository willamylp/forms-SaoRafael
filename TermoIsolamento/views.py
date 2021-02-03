from django.shortcuts import render
from .forms import PacienteForm, ResidenteForm
from .models import Paciente, Residente
from Home.urls import home

from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404, redirect, render
import logging

def generateLogs(request, form):
    logging.basicConfig(filename='mylog2.log', level=logging.DEBUG)
    if (request.method == 'POST'):
        logging.debug('request.method=POST')
        logging.debug('form=%s', form)

        if (form.is_valid()):
            logging.debug('form is valid')
            myForm = form.save()
            logging.debug('called form.save(), result=%s', myForm)

        else:
            logging.debug('form is not valid')
    else:
        logging.debug('request.method is not POST')


@login_required
def RegistroTermo(request):
    formPaciente = PacienteForm(request.POST or None)
    formResidente = ResidenteForm(request.POST or None)
    #generateLogs(request, formPaciente)

    if(formPaciente.is_valid()):
        formPaciente.save()
        if((request.POST['num_pessoas'] != None) or (int(request.POST['num_pessoas']) > 0)):
            #print('>>>>>>>>>>>>>> ', request.POST['id_nome_residente_0'])
            for i in range(int(request.POST['num_pessoas'])):
                if(request.POST.get('cpf', None) != None):
                    Residente.objects.create(
                        paciente=Paciente.objects.get(
                            pk=Paciente.objects.filter(cpf=request.POST['cpf'])[:1]
                        ),
                        nome_residente=request.POST['id_nome_residente_{}'.format(i)]
                    ).save()
                elif(request.POST.get('cns', None) != None):
                    Residente.objects.create(
                        paciente=Paciente.objects.get(
                            pk=Paciente.objects.filter(cns=request.POST['cns'])[:1]
                        ),
                        nome_residente=request.POST['id_nome_residente_{}'.format(i)]
                    ).save()
        
        messages.success(request, 'Termo de Isolamento Registrado com Sucesso!')
        return redirect('../ListarTermos')
    return render(
        request, 'registroTermo/content.html', {
            'formPaciente': formPaciente, 
            'formResidente': formResidente
        }
    )

@login_required
def ListarTermos(request):
    pacientes = Paciente.objects.all().values()
    return render(request, 'listagemTermos/ListarTermos.html', {'pacientes': pacientes})

@login_required
def VerInformacoes(request, id):
    paciente = get_object_or_404(Paciente, pk=id)
    residentes = Residente.objects.filter(paciente_id=id).values()
    #residentes = list(residentes)
    

    print('P >>>', paciente)
    print('R >>>', residentes)
    return render(
        request,
        'verInformacoes/informacoes.html', {
            'paciente': paciente,
            'residente': residentes
        }
    )

@login_required
def AtualizarTermo(request, id):
    pct = get_object_or_404(Paciente, pk=id)
    residentes = Residente.objects.filter(paciente_id=id)
    #print('>>>>>', residentes[0].id)
    #print('>>>>>', len(residentes))
    listaSintomas = list(pct.sintomas)
    listaCondicoes = list(pct.condicoes)
    formPaciente = PacienteForm(request.POST or None, instance=pct)
    
    if(formPaciente.is_valid()):
        formPaciente.save()
        if(int(pct.num_pessoas) > 0):
            for i in range(int(pct.num_pessoas)):
                pass
        else:
            for i in range(len(residentes)):
                residentes[i].delete()
        messages.success(request, 'Termo de Isolamento Atualizado com Sucesso!')     
        return redirect('../../ListarTermos')
    return render(
        request,
        'registroTermo/content.html', {
            'formPaciente': formPaciente,
            'residente': residentes,
            'listSintomas': listaSintomas,
            'listCondicoes': listaCondicoes
        }
    )
    #return render(request, 'registroTermo/content.html', {'form': form})
    
@login_required
def DeletarTermo(request, id):
    pacienteDelete = get_object_or_404(Paciente, pk=id)
    pacienteDelete.delete()
    return redirect('../../ListarTermos')
