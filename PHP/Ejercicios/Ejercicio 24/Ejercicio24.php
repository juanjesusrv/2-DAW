<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 24</title>
</head>
<body>

    <?php

    if (empty(htmlspecialchars($_POST['consulta'])) || empty(htmlspecialchars($_POST['fecha'])) || empty(htmlspecialchars($_POST['hora']))){
        echo "No se han rellenado todos los campos";
        exit;
    }

    $fechaIntroducida = htmlspecialchars($_POST['fecha']);
    $hora = htmlspecialchars($_POST['hora']);
    $condicion = true;

    if($fechaIntroducida < date('Y-m-d')){
        echo "La fecha introducida es anterior a la fecha actual";
        $condicion = false;

    } elseif($fechaIntroducida == date('Y-m-d')){
        if($hora == "manana" && date('H:i') > "12:30"){
            echo "La hora introducida es anterior a la hora actual";
            $condicion = false;
        } elseif($hora == "tarde" && date('H:i') > "16:00"){
            echo "La hora introducida es anterior a la hora actual";
            $condicion = false;
        } elseif($hora == "noche" && date('H:i') > "20:00"){
            echo "La hora introducida es anterior a la hora actual";
            $condicion = false;
        } else {
            $condicion = true;
        }

    } 

    $fchesp = strtotime($fechaIntroducida);

    if($condicion){
        echo "La cita ha sido registrada";
        echo "<br>";
        echo "Nombre: " . htmlspecialchars($_POST['nombre']);
        echo "<br>";
        echo "NSS: " . htmlspecialchars	($_POST['NSS']);
        echo "<br>";
        echo "Tipo de consulta: " . htmlspecialchars($_POST['consulta']);
        echo "<br>";
        echo "Fecha: " . date('d-m-Y', $fchesp);
        echo "<br>";
        

        if ($hora == "manana"){
            echo "Mañana (9:00 a 12:30)";
        } elseif ($hora == "tarde"){
            echo "Tarde (13:00 a 16:00)";
        } else {
            echo "Noche (17:00 a 20:00)";
        }

    } else {
        echo "<br> La cita no ha sido registrada";
    }

    echo "<a href='Ejercicio24.html'>Volver</a>";

    ?>
    
</body>
</html>