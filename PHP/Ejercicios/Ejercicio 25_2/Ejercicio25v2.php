<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 25</title>
</head>
<body>

    <?php

    session_start();

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (!isset($_FILES['fichero'])) {
            $usuario = htmlspecialchars($_POST['usuario']);
            $password = htmlspecialchars($_POST['contrasena']);

            if ($usuario == "user1" && $password == "1234") {
                $_SESSION['usuario'] = $usuario;
                header("Location: ./form_bienve25.php?usuario=$usuario" ); 
                exit();

            } else {

                echo "Usuario o contraseña incorrectos";
                exit();
            }
        } else {
            


            $ruta = "./image_up/";


            $nombrefich = $_FILES['fichero']['name'];   // Nombre del fichero
            $tempofich = $_FILES['fichero']['tmp_name']; // Nombre temporal del fichero
            $sizefich = $_FILES['fichero']['size'];     // Tamaño del fichero
            $typefich = $_FILES['fichero']['type'];     // Tipo del fichero


            //comprobamos que el archivo es una imagen
            //comprobamos que el tamaño del archivo no sea mayor a 2MB

            if (!(exif_imagetype($tempofich))) {
                echo "El archivo no es una imagen; por favor, suba una imagen válida";
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
            }

    } else {
        echo "Error al enviar el formulario";
        exit;
    }

    session_destroy();
    

    ?>

    
</body>
</html>