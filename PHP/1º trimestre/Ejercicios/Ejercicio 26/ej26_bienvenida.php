<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 26</title>
</head>
<body>


    <?php

    session_start();

    if (isset($_SESSION['usuario'])) {
        echo "<h2>Bienvenido ".$_SESSION['usuario']."</h2>";
    } else {
        header("Location: ./ej26_login.php" );
        exit();
    }


    echo "¿A cual página quieres ir ahora? <br>";
    echo " <ul><li><a href='./ej26_datos_personales.php'>Página de datos personales</a></li>";
    echo "<li><a href='./ej26_pag_adicional.php'>Página adicional</a></li></ul>";
    echo "<button onclick='window.location.href=\"./ej26_cerrar_sesion.php\"'>Cerrar sesión</button>";
    
    ?>

    

    
</body>
</html>