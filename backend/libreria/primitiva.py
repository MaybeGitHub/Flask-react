from libreria.utils.numeros_unicos import generar_numeros_unicos

def num_primitiva():
    result = []
    for _ in range(6):
        new_number = generar_numeros_unicos(result, 1, 49, 1)
        
        result.append(new_number)

    new_number = generar_numeros_unicos(result, 0, 9, 1)
    result.append(new_number)
    
    # result = {
    #     "numeros": [],
    #     "complementario": [],
    # }

    # for _ in range(6):
    #     new_number = generar_numeros_unicos(result["numeros"], 1, 49, 1)
    #     result["numeros"].append(new_number)
    # result["numeros"] = sorted(result["numeros"])

    # new_number = generar_numeros_unicos(result["complementario"], 0, 9, 1)
    # result["complementario"] = 
    
    return result



# def generar_complementario(listado: list):
#     new_number = random.randrange(0, 9, 1)
#     if new_number in listado:
#         generar_complementario(listado)
#     else:
#         listado.append(new_number)
    

    
  