# Generated by Django 3.1.4 on 2021-01-15 00:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('TermoIsolamento', '0005_auto_20210113_1834'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='paciente',
            name='exame_solicitado',
        ),
        migrations.RemoveField(
            model_name='paciente',
            name='hora_coleta',
        ),
    ]
