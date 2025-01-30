<?php 
session_start();


if (isset($_POST['enviar'])) {
    $usuario = htmlspecialchars($_POST['usuario']);
    $contrasena = htmlspecialchars($_POST['contrasena']);

    if ($usuario == 'admin1' && $contrasena == '1234') {
       $_SESSION['valido'] = true;
    } else {
        echo 'Usuario o contraseña incorrectos';
    }
}

if (isset($_POST['juego']) && isset($_POST['delegado'])) {
    $juego = htmlspecialchars($_POST['juego']);
    $delegado = htmlspecialchars($_POST['delegado']);
    $host = "localhost"; // Nombre del host
    $user = "root"; // Usuario de la base de datos
    $password = ""; // Contraseña de la base de datos
    $db = "campeonatos"; // Nombre de la base de datos

    $con = mysqli_connect($host, $user, $password, $db); // Conectamos a la base de datos
        
    $query1 = "UPDATE juegos SET delegado = '$delegado' WHERE IdJuego = '$juego'"; // Creamos la consulta para actualizar el delegado del juego

    $resultado = mysqli_query($con, $query1); // Ejecutamos la consulta

    if ($resultado) {
        header('Location: opciones.php');
        
    } else {
        echo 'Error al actualizar el delegado';
    }
    
} 


?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 02 – Autenticación y actualización desde formulario (30/01/2025)</title>
</head>
<body>
    
    <?php if (!(isset($_SESSION['valido']))) { ?>
    <!-- La sentencia de php en el action sirve para decirle al formulario que se envíe a sí mismo -->
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
        <label for="usuario">Usuario:</label>
        <input type="text" name="usuario" id="usuario" required>
        <br>
        <label for="contrasena">Contraseña:</label>
        <input type="password" name="contrasena" id="contrasena" required>
        <br>
        <input type="submit" value="Enviar" name="enviar">
    </form>
    <?php } else { ?>

    <!-- • Se debe ejecutar una consulta UPDATE sobre la tabla Juegos para cambiar el nombre del
            delegado del juego correspondiente.-->
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
        <label for="juego">Juego:</label>
        <input type="text" name="juego" id="juego" required>
        <br>
        <label for="delegado">Delegado:</label>
        <input type="text" name="delegado" id="delegado" required>
        <br>
        <input type="submit" value="Actualizar" name="actualizar">
    <?php } ?>


</body>
</html>