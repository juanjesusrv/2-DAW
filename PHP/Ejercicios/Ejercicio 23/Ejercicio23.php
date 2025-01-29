<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 22</title>
</head>
<body>

    <?php

    echo "<h2>¡Hola, " . $_POST['nombre'] . "!</h2>";
    echo "Tu lenguaje elegido es: " . $_POST['lenguajes'] . ".<br><br>";

    $nivel = $_POST['nivel'];
    if ($nivel == 1) {
        $nivelTexto = "Principiante";
    } else if ($nivel == 2) {
        $nivelTexto = "Intermedio";
    } else if ($nivel == 3) {
        $nivelTexto = "Avanzado";
    } else {
        $nivelTexto = "Desconocido";
    }

    echo "Tu nivel de programación es: " . $nivelTexto . ".<br><br>";

    $lenguaje = $_POST['lenguajes'];

    if ($lenguaje == "PHP") {
        echo "PHP es un lenguaje de programación de uso general que se adapta especialmente al desarrollo web.<br><br>";
    } else if ($lenguaje == "Java") {
        echo "Java es un lenguaje de programación de propósito general que se adapta especialmente al desarrollo de aplicaciones empresariales.<br><br>";
    } else if ($lenguaje == "Phyton") {
        echo "Python es un lenguaje de programación de uso general que se adapta especialmente al desarrollo de aplicaciones científicas.<br><br>";
    } else if ($lenguaje == "JavaScript") {
        echo "JavaScript es un lenguaje de programación de uso general que se adapta especialmente al desarrollo web.<br><br>";
    } else {
        echo "Lenguaje desconocido.<br><br>";
    }

    if (isset($_POST['recibirNoticias'])) {
        echo "Has solicitado recibir noticias.";
    } else {
        echo "No has solicitado recibir noticias.";
    }
    ?>
    
</body>
</html>