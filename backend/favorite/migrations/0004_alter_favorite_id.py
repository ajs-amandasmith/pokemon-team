# Generated by Django 4.2.14 on 2024-07-18 03:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('favorite', '0003_alter_favorite_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='favorite',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=True),
        ),
    ]
