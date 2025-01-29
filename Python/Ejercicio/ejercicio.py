# Version: 1.0
#Crea un programa que gestione una biblioteca con una sola clase, llamada Biblioteca.
#La clase debe incluir la lógica tanto para los libros como para su gestión.
#
#Clase Biblioteca:
#
#    Atributos:
#        libros_disponibles (lista de títulos de libros que se pueden prestar).
#        libros_prestados(lista de títulos de libros que se han prestado).
#    Métodos:
#        agregar_libro(titulo): Agrega un nuevo libro a la lista.
#        mostrar_libros_disponibles(): Muestra todos los libros disponibles.
#        prestar_libro(titulo): Marca un libro como no disponible.
#        devolver_libro(titulo): Marca un libro como disponible.
#        buscar_libro(titulo): Busca un libro por título y di si está prestado o no.
#        Funcionalidad del programa:
#
#Permitir al usuario interactuar con el programa a través de un menú.



try:
    class Biblioteca:
        
        #Constructor de la clase
        def __init__(self): #self es una referencia a la instancia actual de la clase
            self.libros_disponibles = list() #Atributos de la clase
            self.libros_prestados = list() #Atributos de la clase



        #Metodos de la clase
        
        
        #Metodo para mostrar los libros disponibles
        def mostrar_libros_disponibles(self): #self es una referencia a la instancia actual de la clase
            print("Libros disponibles:") #Imprime un mensaje
            if not self.libros_disponibles: #Si no hay libros disponibles
                print("No hay libros disponibles")
            else: #Si hay libros disponibles
                for libro in self.libros_disponibles: #Recorre la lista de libros disponibles
                    print(libro)
                
                
        #Metodo para agregar un libro a la lista de libros disponibles
        def agregar_libro(self, titulo):
            self.libros_disponibles.append(titulo) #Agrega un libro a la lista de libros disponibles
            print("Libro agregado") #Imprime un mensaje
            
            
        #Metodo para prestar un libro
        def prestar_libro(self, titulo):
            if titulo in self.libros_disponibles: #Si el libro está en la lista de libros disponibles
                self.libros_disponibles.remove(titulo) #Elimina el libro de la lista de libros disponibles
                self.libros_prestados.append(titulo) #Agrega el libro a la lista de libros prestados
                print("Libro prestado") 
            else: #Si el libro no está en la lista de libros disponibles
                print("El libro no está disponible") 

        #Metodo para devolver un libro
        def devolver_libro(self, titulo): 
            if titulo in self.libros_prestados: #Si el libro está en la lista de libros prestados
                self.libros_prestados.remove(titulo) #Elimina el libro de la lista de libros prestados
                self.libros_disponibles.append(titulo) #Agrega el libro a la lista de libros disponibles
                print("Libro devuelto")
            else: #Si el libro no está en la lista de libros prestados
                print("El libro no está prestado")

        #Metodo para buscar un libro
        def buscar_libro(self, titulo): 
            if titulo in self.libros_disponibles: #Si el libro está en la lista de libros disponibles
                print("El libro está disponible") 
            elif titulo in self.libros_prestados: #Si el libro está en la lista de libros prestados
                print("El libro está prestado")
            else: #Si el libro no está en la biblioteca
                print("El libro no está en la biblioteca")
                
except:
    print("Error en la clase Biblioteca")

##############################################################################################################

try:
    biblioteca = Biblioteca() #Instancia de la clase Biblioteca 

    while True:
        print("\n" +"Menú:")
        print("1. Agregar libro")
        print("2. Mostrar libros disponibles")
        print("3. Prestar libro")
        print("4. Devolver libro")
        print("5. Buscar libro")
        print("6. Salir")
        opcion = int(input("Opción: " + "\n"))

        if opcion == 1:
            titulo = input("Título: ")
            biblioteca.agregar_libro(titulo)
        elif opcion == 2:
            biblioteca.mostrar_libros_disponibles()
        elif opcion == 3:
            titulo = input("Título: ")
            biblioteca.prestar_libro(titulo)
        elif opcion == 4:
            titulo = input("Título: ")
            biblioteca.devolver_libro(titulo)
        elif opcion == 5:
            titulo = input("Título: ")
            biblioteca.buscar_libro(titulo)
        elif opcion == 6:
            break
        else:
            print("Opción no válida")
            
        
except:
    print("Error")
    