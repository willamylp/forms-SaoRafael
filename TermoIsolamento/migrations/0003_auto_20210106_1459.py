# Generated by Django 3.1.5 on 2021-01-06 17:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TermoIsolamento', '0002_auto_20201227_1400'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paciente',
            name='dt_fim_isolamento',
            field=models.CharField(max_length=20),
        ),
    ]