# Generated by Django 4.2.14 on 2024-07-17 19:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('team_member', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='teammember',
            name='gender',
        ),
        migrations.RemoveField(
            model_name='teammember',
            name='height',
        ),
        migrations.RemoveField(
            model_name='teammember',
            name='nick_name',
        ),
        migrations.RemoveField(
            model_name='teammember',
            name='weight',
        ),
    ]
