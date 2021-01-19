# Generated by Django 3.1.5 on 2021-01-19 15:58

from django.db import migrations, models
import multiselectfield.db.fields


class Migration(migrations.Migration):

    dependencies = [
        ('TermoIsolamento', '0008_auto_20210118_1945'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paciente',
            name='complemento',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='condicoes',
            field=multiselectfield.db.fields.MultiSelectField(blank=True, choices=[('Doenças respiratórias crônicas descompensadas', 'DOENÇAS RESPIRATÓRIAS CRÔNICAS DESCOMPENSADAS'), ('Doenças cardiácas crônicas', 'DOENÇAS CARDIÁCAS CRÔNICAS'), ('Diabetes', 'DIABETES'), ('Doenças renais crônicas em estágios avançados', 'DOENÇAS RENAIS CRÔNICAS EM ESTÁGIOS AVANÇADOS'), ('Gestante de alto risco', 'GESTANTE DE ALTO RISCO'), ('Imunossupressão', 'IMUNOSSUPRESSÃO'), ('Portador de doenças cromossômicas', 'PORTADOR DE DOENÇAS CROMOSSÔMICAS')], max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='grau_parentesco',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='nome_acs',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='outros_sintomas',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='ponto_referencia',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='telefone2',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='residente',
            name='nome_residente',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='residente',
            name='num_pessoas',
            field=models.CharField(blank=True, max_length=5, null=True),
        ),
    ]
