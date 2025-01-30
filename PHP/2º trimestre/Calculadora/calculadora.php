<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <?php
    session_start();
    $operaciones = [
        "Suma",
        "Resta",
        "Multiplicación",
        "División"
    ];
    $resultado = "";
    $error = "";
    $operacionSeleccionada = "";

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        if (isset($_POST["num1"]) && isset($_POST["num2"]) && isset($_POST["operacion"])) {
            $_SESSION["num1"] = htmlspecialchars($_POST["num1"]);
            $_SESSION["num2"] = htmlspecialchars($_POST["num2"]);
            $_SESSION["operacion"] = htmlspecialchars($_POST["operacion"]);

            $num1 = $_SESSION["num1"];
            $num2 = $_SESSION["num2"];
            $operacionSeleccionada = $_SESSION["operacion"];

            function suma($num1, $num2)
            {
                return $num1 + $num2;
            }
            function resta($num1, $num2)
            {
                return $num1 - $num2;
            }
            function multi($num1, $num2)
            {
                return $num1 * $num2;
            }
            function divi($num1, $num2)
            {
                if ($num2 == 0) {
                    throw new Exception("No se puede dividir por 0");
                } else {
                    return $num1 / $num2;
                }
            }

            // Función personalizada para manejar errores
            function manejadorDeErrores($errno, $errstr)
            {
                echo "Error capturado: [$errno] $errstr\n";
            }
            // Configurar el manejador de errores personalizado
            set_error_handler("manejadorDeErrores");

           

            try {
                switch ($operacionSeleccionada) {
                    case "Suma":
                        $resultado = suma($num1, $num2);
                        break;
                    case "Resta":
                        $resultado = resta($num1, $num2);
                        break;
                    case "Multiplicación":
                        $resultado = multi($num1, $num2);
                        break;
                    case "División":
                        $resultado = divi($num1, $num2);
                        break;
                    default:
                        throw new Exception("Operacion invalida");
                }
            } catch (Exception $e) {
                $error = "Error: " . $e->getMessage();
            }
        }
    }

    ?>

    <fieldset>
        <legend>Calculadora</legend>
        <form action="calculadora.php" method="post">
            <table>
                <tr>
                    <td><label for="c1">Primer Numero</label></td>
                    <td><input type="number" name="num1" id="c1" required></td>
                </tr>
                <tr>
                    <td><label for="c2">Segundo Numero</label></td>
                    <td><input type="number" name="num2" id="c2" required></td>
                </tr>
                <tr>
                    <td><label for="c3">Operacion</label></td>
                    <td>
                        <select name="operacion" id="c3">
                            <?php foreach ($operaciones as $operacion) { ?>
                                <option value="<?php echo $operacion ?>"><?php echo $operacion ?></option>
                            <?php }; ?>
                        </select>
                    </td>
                </tr>
            </table>
            <button type="submit">Calcular</button>
        </form>

    </fieldset>
    <fieldset>
        <legend>Resultado</legend>
        <p><?php
            if (!empty($resultado) || $resultado == 0) {
                echo "El resultado de " . $operacionSeleccionada . " es " . $resultado;
            }
            ?></p>
        <p style="color: red;">
            <?php
            if (!empty($error)) {
                echo $error;
            }
            ?>
        </p>
    </fieldset>
</body>

</html>