

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarea 2 - Envío de correo electrónico con PHP </title>
</head>
<body>
<?php



// Incluir la clase PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';


// Crear una instancia de la clase PHPMailer 
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_OFF;                  // Esto es para ver los errores
    $mail->isSMTP();                                        // Enviar usando SMTP
    $mail->Host       = 'smtp.gmail.com';                 // Configurar el servidor SMTP
    $mail->SMTPAuth   = true;                               // Habilitar autenticación SMTP
    $mail->Username   = 'jrivcan2406@g.educaand.es';   // Nombre de usuario SMTP          
    $mail->Password   = 'sdnb ovyw jxmj sapu';              // Contraseña SMTP                
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;   // Habilitar encriptación SMTP
    $mail->Port       = 465;                              // Puerto TCP para conectarse

    //Establecer los destinatarios y el contenido del mensaje
    $mail->setFrom('juanjesus12rv@gmail.com', 'JJ');                   //Correo del remitente 
    $mail->addAddress('jrivcan2406@g.educaand.es', 'Joe biden');  //Correo del destinatario

    //Contenido del mensaje
    $mail->isHTML(true);                                                      // Establecer el formato del correo electrónico en HTML
    $mail->Subject = 'Here is the subject';                                           // Asunto del correo electrónico
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';                 // Cuerpo del mensaje en HTML
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';      // Cuerpo del mensaje en texto plano

    $mail->send(); // Enviar el mensaje
    echo 'El mensaje ha sido enviado'; // Mensaje de confirmación
} catch (Exception $e) {
    echo "El mensaje no se ha podido enviar: {$mail->ErrorInfo}";
}
 ?>
</body>
</html>