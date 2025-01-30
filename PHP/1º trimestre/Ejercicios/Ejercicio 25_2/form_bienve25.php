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
        
        if (isset($_SESSION["usuario"])) {
            echo "<h2>Bienvenido " . $_SESSION["usuario"] . "</h2>";
        } else {
            header('Location: ./formulario25v2.html');
        }

        session_destroy();

    ?>    

    <h3>SUBIDA DE UNA IMAGEN</h3>
    <p>La imagen puede ser de cualquier formato y con un tamaño máximo de 2MB</p>

    <form action="Ejercicio25v2.php" method="post" enctype="multipart/form-data">
    <label for="fichero">Seleccione la imagen:</label>
        <input type="file" name="fichero" id="fichero">
        <br><br>
    <button type="submit">Enviar</button>
    <hr>

</body>
</html>