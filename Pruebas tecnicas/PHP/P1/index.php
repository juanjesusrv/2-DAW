<?php 

class Tarea {
    public $id;
    public $titulo;
    public $descripcion;
    public $completada;

    public function __construct(int $id, string $titulo, string $descripcion) {
        $this->id = $id;
        $this->titulo = $titulo;
        $this->descripcion = $descripcion;
        $this->completada = false;
    }
    
    public function marcarComoCompletada() {
        $this->completada = true;
    }

    public function mostrarTarea() {
        $estado = $this->completada ? "Completada" : "Pendiente";
        echo "ID: {$this->id}\n";
        echo "Título: {$this->titulo}\n";
        echo "Descripción: {$this->descripcion}\n";
        echo "Estado: {$estado}\n";
        echo "------------------------\n";
    }
}

function agregarTarea(&$listaTareas, Tarea $tarea) {
    $listaTareas[] = $tarea;
}

function eliminarTarea(&$listaTareas, int $id) {
    foreach ($listaTareas as $key => $tarea) {
        if ($tarea->id === $id) {
            unset($listaTareas[$key]);
            echo "La tarea con ID {$id} ha sido eliminada.\n";
            return;
        }
    }
    echo "No se encontró ninguna tarea con ID {$id}.\n";
}

function listarTareas(array $listaTareas) {   
    if (empty($listaTareas)) {
        echo "No hay tareas en la lista.\n";
        return;
    }
    
    echo "\n--- Lista de Tareas ---\n";
    foreach ($listaTareas as $tarea) {
        $tarea->mostrarTarea();
    }
}

function validarEntrada(string $entrada, int $minLongitud, int $maxLongitud): bool {
    if (empty($entrada)) {
        echo "El campo no puede estar vacío.\n";
        return false;
    } elseif (strlen($entrada) < $minLongitud) {
        echo "El campo debe tener al menos {$minLongitud} caracteres.\n";
        return false;
    } elseif (strlen($entrada) > $maxLongitud) {
        echo "El campo no puede tener más de {$maxLongitud} caracteres.\n";
        return false;
    }
    
    return true;
}

function validarID(string $entrada): ?int {
    if (!is_numeric($entrada)) {
        echo "El ID debe ser un número.\n";
        return null;
    }

    $id = (int)$entrada;

    if ($id < 1) {
        echo "El ID debe ser un número positivo.\n";
        return null;
    }

    return $id;
}

// Programa principal
$listaTareas = [];
$idCounter = 1;

do {
    echo "\n1. Agregar tarea\n";
    echo "2. Eliminar tarea\n";
    echo "3. Listar tareas\n";
    echo "4. Salir\n";
    
    // Leer opción del usuario
    $opcion = readline("Seleccione una opción: ");

    switch ($opcion) {
        case 1:
            do {
                // Validar título
                $titulo = readline("Introduce el título de la tarea: ");
            } while (!validarEntrada($titulo, 5, 50));

            do {
                // Validar descripción
                $descripcion = readline("Introduce la descripción de la tarea: ");
            } while (!validarEntrada($descripcion, 10, 100));

            // Crear y agregar tarea
            agregarTarea($listaTareas, new Tarea($idCounter++, $titulo, $descripcion));
            echo "Tarea agregada correctamente.\n";
            break;

        case 2:
            // Validar ID
            $entradaID = readline("Introduce el ID de la tarea a eliminar: ");
            if (($id = validarID($entradaID)) !== null) {
                eliminarTarea($listaTareas, $id);
            }
            break;

        case 3:
            listarTareas($listaTareas);
            break;

        case 4:
            echo "¡Hasta luego!\n";
            break;

        default:
            echo "Opción no válida.\n";
            break;
    }
} while ($opcion != 4);

?>
