# Generated by Django 4.2.14 on 2024-07-16 20:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Favorite',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('number', models.IntegerField()),
                ('image', models.ImageField(max_length=500, upload_to=None)),
                ('height', models.FloatField()),
                ('weight', models.FloatField()),
                ('gender', models.CharField(max_length=10)),
                ('type1', models.CharField(max_length=20)),
                ('type2', models.CharField(max_length=20)),
                ('flavor_text', models.TextField()),
            ],
        ),
    ]
