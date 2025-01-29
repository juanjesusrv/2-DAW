<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 26</title>
</head>
<body>

    <h2>Formulario de login</h2>
    <form action="ej26_login.php" method="post">
        <label for="usuario">Usuario:</label>
        <input type="text" name="usuario" id="usuario" required >
        <br>
        <label for="contrasena">Contraseña:</label>
        <input type="password" name="contrasena" id="contrasena" required >
        <br>
        <input type="submit" value="Iniciar sesión">
    </form>

    <?php

    session_start();

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $usuario = htmlspecialchars($_POST['usuario']);
        $password = htmlspecialchars($_POST['contrasena']);

        if ($usuario == "user1" && $password == "1234") {
            $_SESSION['usuario'] = $usuario;
            header("Location: ./ej26_bienvenida.php?usuario=$usuario" ); 
            exit();

        } else {

            header("Location: ./ej26_login.php" );
            exit();
        }
    }
    
    ?>

    
</body>
</html>