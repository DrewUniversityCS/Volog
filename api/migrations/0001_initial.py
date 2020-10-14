# Generated by Django 3.1.2 on 2020-10-14 22:15

import api.reliability.validators
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Mentor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=60)),
                ('last_name', models.CharField(max_length=60)),
                ('email', models.EmailField(max_length=60, validators=[django.core.validators.EmailValidator(message='Enter a valid email address')])),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='TimeMaster',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('percent_complete', models.FloatField(default=0.0)),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('first_name', models.CharField(max_length=60)),
                ('last_name', models.CharField(max_length=60)),
                ('email', models.EmailField(max_length=60, validators=[django.core.validators.EmailValidator(message='Enter a valid email address')])),
                ('student_id', models.IntegerField(primary_key=True, serialize=False, unique=True, validators=[api.reliability.validators.student_id_validator])),
                ('class_standing', models.CharField(choices=[('FR', 'Freshman'), ('SO', 'Sophomore'), ('JR', 'Junior'), ('SR', 'Senior'), ('PG', 'Post Graduate'), ('GR', 'Graduate')], max_length=2)),
                ('DAS_mentor', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='mentor', to='api.mentor')),
                ('hour_sheet', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, to='api.timemaster')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='HourInstance',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_of_activity', models.DateField(validators=[api.reliability.validators.no_future_dates])),
                ('number_of_hours', models.IntegerField(validators=[api.reliability.validators.hour_instance_validator])),
                ('number_of_minutes', models.IntegerField(blank=True, null=True, validators=[api.reliability.validators.minutes_validator])),
                ('description_of_activity', models.TextField(blank=True, null=True)),
                ('type_of_hour', models.CharField(choices=[('REQ', 'Required'), ('ACT', 'Active (Not Requiring Preapproval'), ('PRE', 'Active (Preapproval)'), ('REC', 'Receptive')], max_length=3)),
                ('learning_goal', models.CharField(choices=[('CONFIDENCE', 'Gain confidence and skills to identify, define and tackle complex problems that impact communities and transcend borders.'), ('EMPATHY', 'Value empathy, understanding and responsiveness to diverse others in their work and public roles.'), ('EXPLORE', 'Explore and take action on solutions to real-world problems that fulfill the goals of social impact, financial viability, and environmental sustainability.')], max_length=10)),
                ('activity_description', models.TextField(blank=True, null=True)),
                ('time_master', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='hours', to='api.timemaster')),
            ],
        ),
    ]
