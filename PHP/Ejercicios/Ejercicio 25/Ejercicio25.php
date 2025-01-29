<?php
    
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $usuario = htmlspecialchars($_POST['usuario']);
        $password = htmlspecialchars($_POST['contrasena']);

        if ($usuario == "user1" && $password == "1234") {
            $_SESSION['usuario'] = $usuario;
            exit();

        } else {

            header("Location: ./formulario25.php" );
            exit();
        }
    }

    ?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 25</title>
</head>
<body>




    <h3>SUBIDA DE UN FICHERO JPG O PNG</h3>
    <p>El fichero debe ser de tipo JPG o PNG y con un tamaño máximo de 2MB</p>

    <form action="Ejercicio25.php" method="post" enctype="multipart/form-data">
    <label for="fichero">Seleccione el fichero:</label>
        <input type="file" name="fichero" id="fichero">
        <br><br>
    <button type="submit">Enviar</button>
    </form>

    <?php

    $ruta = "./image_up/";

    $nombrefich = $_FILES['fichero']['name'];   // Nombre del fichero
    $tempofich = $_FILES['fichero']['tmp_name']; // Nombre temporal del fichero
    $sizefich = $_FILES['fichero']['size'];     // Tamaño del fichero
    $typefich = $_FILES['fichero']['type'];     // Tipo del fichero


    //comprobamos que el archivo es jpg o png
    //comprobamos que el tamaño del archivo no sea mayor a 2MB

    if ($typefich != "image/jpeg" && $typefich != "image/png" && $typefich != "image/jpg") {
        echo "El archivo no es una imagen jpg o png";
        exit;
    }

    $maxSize = 2 * 1024 * 1024; // 2MB

    if ($sizefich > $maxSize) {
        echo "El archivo es demasiado grande";
        exit;
    }

    // Movemos el archivo subido a la carpeta del servidor image_up
    // Mostrar el archivo subido

    $rutadestino = $ruta . basename($nombrefich);
    if (move_uploaded_file($tempofich, $rutadestino)) {
        echo "archivo subido correctamente";
        echo "<br><br>";

        echo "<p> <embed src='$rutadestino' width='500' height='500'> </p>";
    } else {
        echo "Error al subir el archivo";
    }


    session_destroy();
    ?>
    
    
</body>
</html>