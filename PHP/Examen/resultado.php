<?php session_start(); 


    // Inicio un cont, este solo va a llegar a 2, en caso de no existir se iniciara en 1, 
    // al estár en 1 si el carrito está vacio mostrara El carrito esta vacio y acaba el script
    // Si existe quiere decir que ya ha entrado la página y ha visto el carrito, por lo que aunque lo borres no mostrara el error

    if (!isset($cont)){
        $cont = 1;
    } else {
        $cont = 2;
    }
?>

<?php if (empty($_SESSION['carrito']) && $cont == 1){ //Este es el codigo que al estar vacio el carrito y el cont en 1 entra

exit("<p>El carrito está vacio</p>");

} ?>

<?php 

function vaciarCarrito(){ // Funcion para vaciar la session del carrito
    $_SESSION['carrito'] = [];
}

function totalImpuestos(){ 
    $suma = 0;

    foreach ($_SESSION['carrito'] as $producto) { //Por cada producto que existe en el carrito
    
        $suma = $suma + ($producto['precio'] * $producto['cantidad']); //Multiplica los productos por su precio y suma la cantidad anterior
    }

    return $suma * 1.21; //Le añado el 21% de IVA
}


?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>resultado</title>
    <style>
        table{
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid black;
        }
    </style>
</head>
<body>
<?php if(!empty($_SESSION['carrito']) || $cont == 2) { ?>

<h1>Carrito de compras</h1>
<h3>Juan Jesús Rivillas Canalejo</h3>
<br>

<fieldset>
    <legend><b>Productos en el carrito</b></legend>
    <table style="border: 1px solid black;">
        <tr>
            <th>Producto</th>
            <th>Precio unitario (€)</th>
            <th>Cantidad</th>
            <th>Subtotal (€)</th>
        </tr>

        <?php if(!empty($_SESSION['carrito'])) { 
            // Si el carrito no está vacio
            
            foreach ($_SESSION['carrito'] as $producto) {

                //Crea un tr y td por cada producto y su informacion
            
                echo "<tr>";
                    echo "<td>" . $producto['nombre'] . "</td>";
                    echo "<td>" . $producto['precio'] . "</td>";
                    echo "<td>" . $producto['cantidad'] . "</td>";
                    echo "<td>" . $producto['precio'] * $producto['cantidad'] . "</td>";
                echo "</tr>";
            }

            // Y cuando se acaban los productos cierro la tabla
            echo "</table>";
        
            echo "<p><b>Total con impuestos (21%): " . totalImpuestos() . "<hr>";

            echo "<button onclick=''>Vaciar el carrito</button>";

            echo "<hr>";
            
        } ?>

        <?php if(empty($_SESSION['carrito'])) { 

            // Al no haber productos cierra el carrito
            echo "</table>";
        
            echo "<p><b>Total con impuestos (21%): " . totalImpuestos() . "<hr>";

            echo "<button onclick=''>Vaciar el carrito</button>";

            echo "<hr>";
            
        } ?>

        <a href="./formulario.php">Volver al formulario</a>


    
</fieldset>

<?php } ?>
</body>
</html>