from django.db import models
from datetime import datetime
from multiselectfield import MultiSelectField

# Create your models here.
class Paciente(models.Model):
    EXAME_SOLICITADO = (
        ('RT-PCR', 'RT-PCR'),
        ('TR - Anticorpo', 'TR - ANTICORPO'),
        ('TR - Antígeno', 'TR - ANTÍGENO'),
        ('Teste Sorológico', 'TESTE SOROLÓGICO')
    )
    CONDICOES = (
        ('Doenças respiratórias crônicas descompensadas', 'DOENÇAS RESPIRATÓRIAS CRÔNICAS DESCOMPENSADAS'),
        ('Doenças cardiácas crônicas', 'DOENÇAS CARDIÁCAS CRÔNICAS'),
        ('Diabetes', 'DIABETES'),
        ('Doenças renais crônicas em estágios avançados', 'DOENÇAS RENAIS CRÔNICAS EM ESTÁGIOS AVANÇADOS'),
        ('Gestante de alto risco', 'GESTANTE DE ALTO RISCO'),
        ('Imunossupressão', 'IMUNOSSUPRESSÃO'),
        ('Portador de doenças cromossômicas', 'PORTADOR DE DOENÇAS CROMOSSÔMICAS'),
    )
    SINTOMAS = (
        ('Assintomático', 'ASSINTOMÁTICO'),
        ('Astenia', 'ASTENIA'),
        ('Cefaléia', 'CEFALÉIA'),
        ('Dispinéia', 'DISPINÉIA'),
        ('Distúrbios Gastrintestinais', 'DISTÚRBIOS GASTRINTESTINAIS'),
        ('Distúrbios Gustativos', 'DISTÚRBIOS GUSTATIVOS'),
        ('Distúrbios Olfativos', 'DISTÚRBIOS OLFATIVOS'),
        ('Dor de Garganta', 'DOR DE GARGANTA'),
        ('Dorsalgia', 'DORSALGIA'),
        ('Febre', 'FEBRE'),    
        ('Mialgia', 'MIALGIA'),
        ('Odinofagia', 'ODINOFAGIA'),
        ('Tosse', 'TOSSE'),
        ('Outros', 'OUTROS'),
    )
    RESPONSAVEL_PCT = (
        ('Paciente', 'PACIENTE'),
        ('Responsável', 'RESPONSÁVEL')
    )

    data_registro = models.DateField(
        auto_now=False, auto_now_add=True
    )
    # ---> INFORMAÇÕES PESSOAIS OK <---
    nome_paciente = models.CharField(max_length=200, blank=False, null=False)
    cpf = models.CharField(max_length=14, blank=True)
    cns = models.CharField(max_length=18, blank=True)
    dt_nascimento = models.DateField(blank=False)
    dt_1_sintomas = models.DateField(blank=False)
    dt_ini_isolamento = models.DateField(blank=False)
    dt_fim_isolamento = models.CharField(max_length=20, blank=False, null=False)
    responsavel_pct = models.CharField(max_length=20, blank=False, choices=RESPONSAVEL_PCT, default='')
    grau_parentesco = models.CharField(max_length=50, blank=True)

    # ---> INFORMAÇÕES CLÍNICAS <---
    sintomas = MultiSelectField(blank=False, choices=SINTOMAS)
    condicoes = MultiSelectField(blank=True, choices=CONDICOES)
    outros_sintomas = models.CharField(max_length=200, blank=True)
    #hora_coleta = models.TimeField(auto_now=False, auto_now_add=False, blank=True)
    #exame_solicitado = models.CharField(max_length=50, blank=False, choices=EXAME_SOLICITADO, default='')

    # ---> ENDEREÇO OK <---
    endereco = models.CharField(max_length=100, blank=False)
    num_endereco = models.CharField(max_length=10, blank=False)
    complemento = models.CharField(max_length=100, blank=True)
    bairro = models.CharField(max_length=100, blank=False)
    ponto_referencia = models.CharField(max_length=100, blank=True)

    # ---> CONTATO OK <---
    telefone = models.CharField(max_length=20, blank=False)
    telefone2 = models.CharField(max_length=20, blank=True)

    # ---> PROFISSIONAIS OK <---
    nome_acs = models.CharField(max_length=100, blank=True)
    profis_informante = models.CharField(max_length=100, blank=False)

    def __str__(self):
        return self.nome_paciente


class Residente(models.Model):
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    nome_residente = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.nome_residente
