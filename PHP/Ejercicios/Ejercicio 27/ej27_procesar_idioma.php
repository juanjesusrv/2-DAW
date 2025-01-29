<?php if (isset($_POST['idioma']) && ($_SERVER['REQUEST_METHOD'] == 'POST')) {
    $idioma = htmlspecialchars($_POST['idioma']);
    
    setcookie('idioma_preferido', $idioma, time() + 3600 * 24 * 30);

    header('Location: ej27_web_idioma.php');
       
} else {
    echo 'No se ha seleccionado ningún idioma';
}

?>