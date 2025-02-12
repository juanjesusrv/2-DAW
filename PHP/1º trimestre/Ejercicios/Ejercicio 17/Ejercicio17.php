<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 17</title>
</head>
<body>
    <h1>Ejercicio 17: Funciones (3)</h1>
    <hr>
        <?php 
        
        $articulos = array(
            ["Teclado", 58],
            ["Raton", 32],
            ["Impresora", 185],
            ["Altavoz", 62],
            ["Auriculares", 36],
            ["Monitor", 102],
            ["Webcam", 47]
        );


        // Agregar articulos con los parametros necesarios
        function agregarArticulo(&$articulos, $nombre, $precio){
            array_push($articulos, array($nombre, $precio));
            return $articulos;
        }

        // Lista de articulos
        function listarArticulos($articulos){
            echo "<table>";
            echo "<tr><td>Artículo</td><td>Precio</td></tr><tr><td>----------</td><td>--------</td></tr>";
            
            foreach ($articulos as $key => $value){
                echo "<tr><td>".$value[0]."</td><td style=\" text-align: center;\">".$value[1]." </td></tr>";
            }
            echo "</table> <br>";
        }

        //Calcular el promedio de precio de los articulos
        function promedioArticulos($articulos){
            $suma = 0;
            foreach ($articulos as $key => $value){
                $suma += $value[1];
            }

            return round($suma / count($articulos), 2)."€";
        }

        //Eliminar un articulo por su nombre
        function eliminarArticulo(&$articulos, $nombre){
            foreach ($articulos as $key => $value){
                if ($value[0] == $nombre){
                    unset($articulos[$key]);
                    $articulos = array_values($articulos); // Con esto reordenamos los indices
                }
            }
        }
            

        listarArticulos($articulos); // Mostramos los articulos

        agregarArticulo($articulos, "Impresora 3D", 250); // Agregamos un articulo
        agregarArticulo($articulos, "Escáner", 75); // Agregamos un articulo
        
        eliminarArticulo($articulos, "Webcam"); // Eliminamos un articulo

        listarArticulos($articulos); // Mostramos los articulos

        echo "El promedio de los precios de los articulos es: " 
            . promedioArticulos($articulos); // Mostramos el promedio de los precios
        ?>
    <hr>
    <h3>Juan Jesús Rivillas Canalejo - 2º DAW</h3>
</body>
</html>