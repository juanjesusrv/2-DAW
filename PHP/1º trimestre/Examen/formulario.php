<?php 
session_start(); 

if (empty($_SESSION)) { //Si la sesion está vacía
    $productosdisponibles = []; //Creo un array para almacenar un producto a la vez
    $_SESSION['carrito'] = []; //Creo la session carrito
}

if ($_SERVER['REQUEST_METHOD'] === 'POST'){ //Compruebo que el formulario se recoja con el metodo POST

    //Compruebo que ninguno esté vacio 
    if (!empty($_POST['ropa']) && isset($_POST['ropa']) && !empty($_POST['cantidad'])  && isset($_POST['cantidad']) && $_POST['cantidad'] > 0 && $_POST['cantidad'] < 100){  

        //Compruebo que existe ropa y cantidad, y que cantidad sea entre 1 y 99
        $ropa = htmlspecialchars($_POST['ropa']);
        $cantidad = htmlspecialchars($_POST['cantidad']);

        //Asigno los precios a los articulos
        if ($ropa == 'camiseta') {
            $precio = 25;
        } else if ($ropa == 'pantalon') {
            $precio = 23;
        } else {
            $precio = 64;
        }
      
        //Creo el array con todos los datos introducidos por el usuario
        $productosdisponibles = array("nombre" => "$ropa", "precio" => $precio, "cantidad" => $cantidad);

        //Lo añado a session con todos los datos correspondiente
        $_SESSION['carrito'][] = $productosdisponibles;

    } 
} 


?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>formulario</title>
</head>
<body>

    <h1>Formulario de compra</h1>
    <h3>Juan Jesús Rivillas Canalejo</h3>

    <form action="./formulario.php" method="post">

    <table>
        <tr>
            <td><label for="ropa">Selecciona un producto:</label></td>
            <td>
                <select name="ropa" id="ropa" required>
                <option></option>
                <option value="camiseta">Camiseta - 25€</option>
                <option value="pantalon">Pantalon - 23€</option>
                <option value="zapatos">Zapatos - 64€</option>
            </select>
            </td>
        </tr>
        <tr>
            <td><label for="cantidad">Cantidad:</label></td>
            <td><input type="number" id="cantidad" name="cantidad" required></td>
        </tr>
        <tr>
            <td><input type="submit" value="Agregar al carrito"></td>
        </tr>
    </table>
    </form>
    <hr>

    <a href="./resultado.php">Ver carrito</a>

</body>
</html>