from .models import Paciente, Residente
from django import forms
from django.forms import ModelForm

class DateInput(forms.DateInput):
    input_type = 'date'
class PacienteForm(forms.ModelForm):
    class Meta:
        model = Paciente
        fields = '__all__'

class ResidenteForm(forms.ModelForm):
    class Meta:
        model = Residente
        fields = '__all__'
