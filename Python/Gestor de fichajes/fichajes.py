def add_jugador(nombre, jugadores):
    return jugadores.append(nombre)

def rm_jugador(nombre, jugadores):
    return jugadores.remove(nombre)

def ver_jugadores(jugadores):
    return jugadores
    

def buscar_jugador(nombre, jugadores):
    return nombre in jugadores

def ordenar_alfabetica(jugadores):
    return sorted(jugadores)

def opcion():
    print("1. Añadir jugador")
    print("2. Eliminar jugador")
    print("3. Ver jugadores")
    print("4. Buscar jugador")
    print("5. Ordenar alfabéticamente")
    print("6. Salir")
    
    
    try:
        opcion = int(input("Introduce una opción: "))
        if opcion < 1 or opcion > 6:
            raise ValueError("Introduce un número entre 1 y 6")
        elif opcion >= 1 and opcion <= 6:
            return opcion
        else:
            raise ValueError("Introduce una opción válida")
        
    except Exception as e:
        print(f"Error.  {e}")
        return -1

def main():
    jugadores = []
    while True:
        opcion_elegida = opcion()
        if opcion_elegida == 1:
            nombre = input("Introduce el nombre del jugador: ")
            add_jugador(nombre, jugadores)
            print(f"El jugador {nombre} ha sido añadido" + "\n")
        elif opcion_elegida == 2:
            nombre = input("Introduce el nombre del jugador: ")
            rm_jugador(nombre, jugadores)
            print(f"El jugador {nombre} ha sido eliminado" + "\n")
        elif opcion_elegida == 3:
            print(ver_jugadores(jugadores))
            print("\n")
        elif opcion_elegida == 4:
            nombre = input("Introduce el nombre del jugador: ")
            print(buscar_jugador(nombre, jugadores))
            print("\n")
        elif opcion_elegida == 5:
            print(ordenar_alfabetica(jugadores))
            print("\n")
        elif opcion_elegida == 6:
            break
        else:
            print("Error. Introduce una opción válida" + "\n")
            

main()