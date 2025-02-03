<?php 

class Producto {
    public int $id;
    public string $nombre;
    public int $cantidad;
    public float $precio;

    public function __construct(int $id, string $nombre, int $cantidad, float $precio) {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->cantidad = $cantidad;
        $this->precio = $precio;
    }

    public function mostrarProducto(): void {
        echo "ID: {$this->id}\n";
        echo "Nombre: {$this->nombre}\n";
        echo "Cantidad: {$this->cantidad}\n";
        echo "Precio Unitario: \${$this->precio}\n";
        echo "------------------------\n";
    }
}

function agregarProducto(array &$inventario, Producto $producto): void {
    foreach ($inventario as $item) {
        if (strtolower($item->nombre) === strtolower($producto->nombre)) {
            echo "El producto ya existe en el inventario.\n";
            return;
        }
    }
    $inventario[] = $producto;
    echo "Producto agregado correctamente.\n";
}

function eliminarProducto(array &$inventario, int $id): void {
    foreach ($inventario as $key => $producto) {
        if ($producto->id === $id) {
            unset($inventario[$key]);
            echo "El producto con ID {$id} ha sido eliminado.\n";
            return;
        }
    }
    echo "No se encontró ningún producto con ID {$id}.\n";
}

function listarProductos(array $inventario): void {
    if (empty($inventario)) {
        echo "El inventario está vacío.\n";
        return;
    }
    
    echo "\n--- Lista de Productos ---\n";
    foreach ($inventario as $producto) {
        $producto->mostrarProducto();
    }
}

function buscarProducto(array $inventario, string $nombre): void {
    foreach ($inventario as $producto) {
        if (strtolower($producto->nombre) === strtolower($nombre)) {
            echo "\n--- Producto Encontrado ---\n";
            $producto->mostrarProducto();
            return;
        }
    }
    echo "No se encontró ningún producto con el nombre '{$nombre}'.\n";
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

function validarNumero(string $entrada, float $minValor, float $maxValor): ?float {
    if (!is_numeric($entrada)) {
        echo "Debe ser un número válido.\n";
        return null;
    }

    $numero = (float)$entrada;

    if ($numero < $minValor) {
        echo "El valor debe ser mayor o igual a {$minValor}.\n";
        return null;
    }

    if ($numero > $maxValor) {
        echo "El valor debe ser menor o igual a {$maxValor}.\n";
        return null;
    }

    return $numero;
}

// Programa principal
$inventario = [];
$idCounter = 1;

do {
    echo "\n1. Agregar producto\n";
    echo "2. Eliminar producto\n";
    echo "3. Listar productos\n";
    echo "4. Buscar producto\n";
    echo "5. Salir\n";

    // Leer opción del usuario
    $opcion = readline("Seleccione una opción: ");

    switch ($opcion) {
        case '1':
            do {
                // Validar nombre
                $nombre = readline("Nombre del producto: ");
            } while (!validarEntrada($nombre, 3, 50));

            do {
                // Validar cantidad
                $cantidad = readline("Cantidad disponible: ");
                $cantidadValida = validarNumero($cantidad, 0, 1000);
            } while ($cantidadValida === null);

            do {
                // Validar precio
                $precio = readline("Precio unitario: ");
                $precioValido = validarNumero($precio, 0.01, 1000);
            } while ($precioValido === null);

            // Crear y agregar producto
            agregarProducto($inventario, new Producto($idCounter++, ucfirst($nombre), (int)$cantidadValida, (float)$precioValido));
            break;

        case '2':
            do {
                // Validar ID
                $id = readline("ID del producto a eliminar: ");
                if (!is_numeric($id)) {
                    echo "El ID debe ser un número válido.\n";
                    continue;
                }
                break;
            } while (true);

            eliminarProducto($inventario, (int)$id);
            break;

        case '3':
            listarProductos($inventario);
            break;

        case '4':
            do {
                // Validar búsqueda por nombre
                $busqueda = readline("Nombre del producto a buscar: ");
            } while (!validarEntrada($busqueda, 3, 50));

            buscarProducto($inventario, ucfirst($busqueda));
            break;

        case '5':
            echo "Saliendo...\n";
            break;

        default:
            echo "Opción inválida.\n";
            break;
    }
} while ($opcion !== '5');

?>
