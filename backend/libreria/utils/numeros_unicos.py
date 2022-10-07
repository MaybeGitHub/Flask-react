import random

def generar_numeros_unicos(listado_actual: list, start: int, stop: int, step: int):
    new_number = random.randrange(start, stop, step)
    if new_number in listado_actual:
        return generar_numeros_unicos(listado_actual, start, stop, step)
    else:
        return new_number