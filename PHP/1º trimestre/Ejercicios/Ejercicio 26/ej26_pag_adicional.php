<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 26</title>
</head>
<body>

    <h2>Página adicional</h2>

    <?php
    
        session_start();


            if (isset($_SESSION['nombre'])) {
                echo "<p>Nombre: ".$_SESSION['nombre']."</p>";
                echo "<p>Apellidos: ".$_SESSION['apellidos']."</p>";
                echo "<p>Edad: ".$_SESSION['edad']."</p>";
                echo "<p>Email: ".$_SESSION['email']."</p>";
                echo "<p>Provincia: ".$_SESSION['provincia']."</p>";
            } else {
                echo "<p>No se han introducido datos personales</p>";
                echo "<p>Por favor, introduzca sus datos personales en la página de datos personales</p>";
                echo "<a href='./ej26_datos_personales.php'>Página de datos personales</a>";
            }
        

    ?>

    

    
</body>
</html>