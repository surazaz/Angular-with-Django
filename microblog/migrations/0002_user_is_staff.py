# Generated by Django 2.1.1 on 2018-09-08 06:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('microblog', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='is_staff',
            field=models.BooleanField(blank=True, default=False),
        ),
    ]