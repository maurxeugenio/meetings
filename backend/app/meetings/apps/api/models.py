from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import ugettext_lazy as _
from django.utils.datetime_safe import datetime


class Meeting(models.Model):
    name = models.CharField(_('Nome da reunião'), max_length=255)
    description = models.TextField(_('Descrição'), max_length=500)
    date = models.DateTimeField(_('Data'), default=datetime.now)
    image = models.ImageField(_('Imagem de referência'), )
    participants = models.ManyToManyField(User, verbose_name='Participantes', related_name='participants')

    def get_image_url(self):
        return f'http://localhost:8000{self.image.url}'

    def __str__(self):
        return f'{self.name} {self.date.strftime("%d/%m/%Y %H:%M")}'


    class Meta:
        verbose_name = 'Reunião'
        verbose_name_plural = 'Reuniões'
        ordering = ('-date', )
