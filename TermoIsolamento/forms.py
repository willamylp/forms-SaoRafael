from .models import Paciente, Residente
from django import forms
from django.forms import ModelForm

class DateInput(forms.DateInput):
    input_type = 'date'
class PacienteForm(ModelForm, forms.Form):
    class Meta:
        model = Paciente
        fields = '__all__'
        widgets = {}


class ResidenteForm(ModelForm, forms.Form):
    class Meta:
        model = Residente
        fields = '__all__'
        widgets = {}
