# Generated by Django 3.0.6 on 2020-06-02 19:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20200531_1714'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='meeting',
            options={'ordering': ('date',), 'verbose_name': 'Reunião', 'verbose_name_plural': 'Reuniões'},
        ),
    ]
