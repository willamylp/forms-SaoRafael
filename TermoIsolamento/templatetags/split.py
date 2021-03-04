from django.template.defaulttags import register

@register.filter(name='split')
def split(string, sep):
    #Example usage: {{ value|split:"/" }}
    return string.split(sep)
