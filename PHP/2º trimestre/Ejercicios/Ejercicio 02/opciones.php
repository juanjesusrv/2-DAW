<?php session_start(); 

if (isset($_POST['decision'])) {
    if ($_POST['decision'] == 'Si') {
        header('Location: index.php');
    } else {
        session_destroy();
        header('Location: index.php');
    }
}


?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<h2>El delegado se ha cambiado con exito</h2>
    
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
    <label for="decision">Quieres volver a introducir un delegado:</label>
        <input type="submit" name="decision" value="Si">
        <input type="submit" name="decision" value="No">
    </form>
</body>
</html>