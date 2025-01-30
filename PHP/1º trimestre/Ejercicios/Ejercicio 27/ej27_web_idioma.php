<!DOCTYPE html>
<html lang="<?= $idioma ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php if(!isset($_COOKIE['idioma_preferido'])) { ?>
        
        <h1>Hola, bienvenido a nuestra página web</h1>
        <h2>Página en español</h2>
        <button><a href="ej27_idioma.html">Cambiar idioma / Change lenguage</a></button>
    
    <?php } ?>

    <?php if ($_COOKIE['idioma_preferido'] == 'es') { ?>
        <h1>Hola, bienvenido a nuestra página web</h1>
        <h2>Página en español</h2>
        <button><a href="ej27_idioma.html">Cambiar idioma / Change lenguage</a></button>

    <?php } ?>

    <?php if ($_COOKIE['idioma_preferido'] == 'en') { ?>
        <h1>Hello, welcome to our website</h1>
        <h2>Page in English</h2>
        <button><a href="ej27_idioma.html">Cambiar idioma / Change lenguage</a></button>
    <?php } ?>


</body>
</html>