from libreria.utils.numeros_unicos import generar_numeros_unicos

def num_euro():
    result = []
    for _ in range(5):
        new_number = generar_numeros_unicos(result, 1, 50, 1)
        
        result.append(new_number)
    for _ in range(2):
        new_number = generar_numeros_unicos(result, 0, 12, 1)
        result.append(new_number)

    # result = {
    #     "numeros": [],
    #     "estrellas": [],
    # }

    # for _ in range(5):
    #     new_number = generar_numeros_unicos(result["numeros"], 1, 50, 1)
    #     result["numeros"].append(new_number)

    # result["numeros"] = sorted(result["numeros"])

    # for _ in range(2):
    #     new_number = generar_numeros_unicos(result["estrellas"], 0, 12, 1)
    #     result["estrellas"].append(new_number)

    # result["estrellas"] = sorted(result["estrellas"])

    return result