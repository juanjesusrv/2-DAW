// EJERCICIO 2


let email = "";
let emailAux = "";
let contrasenia = "";
let contraseniaAux = "";
let intentos = 3;

email = prompt("Introduce el email")
emailAux = prompt("Repite el email")

while (email !== emailAux || !validarEmail(email)){
    
        email = prompt("Email incorrecto. Vuelva a introducirlo")
        emailAux = prompt("Repite el email")
    
    }


contrasenia = prompt("Introduce la contraseña")
contraseniaAux = prompt("Repite la contraseña")

while (contrasenia !== contraseniaAux){

    contrasenia = prompt("Contraseña incorrecta. Vuelva a introducirla")
    contraseniaAux = prompt("Repite la contraseña")

}

alert("Email/contraseña configurados con éxito. Ingrese los datos de acceso para acceder a la web")

let listaEmails = [];
let listaContrasenias = [];

listaEmails.push(email);
listaContrasenias.push(contrasenia);

alert("Introduce el email y la contraseña para acceder a la web, tienes un maximo de 3 intentos")

while (intentos > 0){
    email = prompt("Introduce el email")
    contrasenia = prompt("Introduce la contraseña")

    if (listaEmails.includes(email) && listaContrasenias.includes(contrasenia) && (listaEmails.indexOf(email) === listaContrasenias.indexOf(contrasenia))){
        alert("Acceso concedido")
        break;
    } else if (intentos > 1){
        intentos--;
        alert("Email o contraseña incorrectos. Inténtalo de nuevo. Te quedan " + intentos + " intentos")
    } else {
        alert("Has agotado los intentos. Inténtalo más tarde")
    }
}

function validarEmail(email){
    // /^ = Inicio de la cadena
    // [a-zA-Z0-9._-] = Letras mayusculas, minusculas, numeros, punto, guion bajo y guion medio
    // + = Indica que se puede repetir una o mas veces
    // @ = Caracter @
    // [a-zA-Z0-9_-] = Letras mayusculas, minusculas, numeros, guion bajo y guion medio
    // + = Indica que se puede repetir una o mas veces
    // \. = Caracter punto
    // [a-zA-Z]{2,4} = Letras mayusculas y minusculas que se repiten entre 2 y 4 veces
    // (\.[a-zA-Z]{2,4})? = Grupo opcional que se repite entre 2 y 4 veces
    // $ = Fin de la cadena
    let er = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+\.[a-zA-Z]{2,4}(\.[a-zA-Z]{2,4})?$/;
    return er.test(email);
}

function validarContrasenia(contrasenia){
    // /^ = Inicio de la cadena
    // (?=.) = Indica que a lo largo de la cadena se encuentra al menos una vez
    // (?!.*) = Al añadir la exclamación indicamos que NO se encuentra ni una sola vez en la cadena
    // \d = Numero -- [a-z] = letras minusculas -- [A-Z] = Letras mayusculas -- [#$@!%&?] = Esos caracteres en especifico -- \s = espacios
    // $/ = Fin de la cadena
    let er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#$@!%&?])(?!.*\s).{8,16}$/;
    return er.test(contrasenia);
}