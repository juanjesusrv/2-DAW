<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 26</title>
</head>
<body>

    <h2>Datos personales</h2>

    <form action="./ej26_datos_personales.php" method="post">
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" id="nombre" required >
        <br>
        <label for="apellidos">Apellidos:</label>
        <input type="text" name="apellidos" id="apellidos" required >
        <br>
        <label for="edad">Edad:</label>
        <input type="number" name="edad" id="edad" required >
        <br>
        <label for="email">email:</label>
        <input type="email" name="email" id="email" required >
        <br>
        <label for="provincia">Provincia:</label>
        <input type="text" name="provincia" id="provincia" required >
        <br>
        <input type="submit" value="Enviar">
    </form>

    <?php
    
        session_start();

        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $nombre = htmlspecialchars($_POST['nombre']);
            $apellidos = htmlspecialchars($_POST['apellidos']);
            $edad = htmlspecialchars($_POST['edad']);
            $email = htmlspecialchars($_POST['email']);
            $provincia = htmlspecialchars($_POST['provincia']);

            $_SESSION['nombre'] = $nombre;
            $_SESSION['apellidos'] = $apellidos;
            $_SESSION['edad'] = $edad;
            $_SESSION['email'] = $email;
            $_SESSION['provincia'] = $provincia;

            header("Location: ./ej26_pag_adicional.php" ); 
            exit();
        }

    ?>

    

    
</body>
</html>