# Generated by Django 3.1.4 on 2020-12-23 00:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraccount',
            name='img',
            field=models.CharField(default='null', max_length=690, null=True),
        ),
    ]
