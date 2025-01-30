<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 26</title>
</head>
<body>

    <h2>Datos personales</h2>

    <?php
    
        session_start();

        session_unset();

        session_destroy();

        setcookie(session_name(), '', time() - 3600);

        header("Location: ./ej26_login.php" );
    ?>

    

    
</body>
</html>