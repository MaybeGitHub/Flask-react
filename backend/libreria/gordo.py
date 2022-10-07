from libreria.utils.numeros_unicos import generar_numeros_unicos

def num_gordo():
    result = []
    for _ in range(5):
        new_number = generar_numeros_unicos(result, 1, 54, 1)
        
        result.append(new_number)
    
    new_number = generar_numeros_unicos(result, 0, 9, 1)
    result.append(new_number)

    # result = {
    #     "numeros": [],
    #     "clave": [],
    # }

    # for _ in range(5):
    #     new_number = generar_numeros_unicos(result["numeros"], 1, 54, 1)
    #     result["numeros"].append(new_number)

    # result["numeros"] = sorted(result["numeros"])

    # for _ in range(2):
    #     new_number = generar_numeros_unicos(result["clave"], 0, 9, 1)
    #     result["clave"].append(new_number)

    # result["clave"] = sorted(result["clave"])

    return result
   