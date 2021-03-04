from django.template.defaulttags import register

@register.filter(name='soma1')
def soma1(string):
    return (int(string) + 1)
