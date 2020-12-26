from .models import TermoIsolamento
from django import forms
from django.forms import ModelForm

class IsolamentoForm(forms.ModelForm):
    class Meta:
        model = TermoIsolamento
        fields = '__all__'
