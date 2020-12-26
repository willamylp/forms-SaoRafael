from django.db import models

# Create your models here.
class TermoIsolamento(models.Model):

    

    class Meta:
        verbose_name = _("TermoIsolamento")
        verbose_name_plural = _("TermoIsolamentos")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("TermoIsolamento_detail", kwargs={"pk": self.pk})
