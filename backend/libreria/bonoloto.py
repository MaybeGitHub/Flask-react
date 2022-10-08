from libreria.utils.numeros_unicos import generar_numeros_unicos


def num_bonoloto():
    
    # result = []
    # for _ in range(6):
    #     new_number = generar_numeros_unicos(result, 1, 49, 1)
        
    #     result.append(new_number)

    # new_number = generar_numeros_unicos(result, 0, 49, 1)
    # result.append(new_number)

    result = {
        "numeros": [],
        "complementario": [],
    }

    for _ in range(6):
        new_number = generar_numeros_unicos(result["numeros"], 1, 49, 1)
        result["numeros"].append(new_number)

    result["numeros"] = sorted(result["numeros"])

    new_number = generar_numeros_unicos(result["complementario"], 0, 49, 1)
    result["complementario"].append(new_number)


    return result

