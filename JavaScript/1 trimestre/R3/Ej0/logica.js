// EJERCICIO 1

let email = "";

function solicitarCadena(){

    let cadena = prompt("Introduce una cadena de texto");
    return cadena;
}

email = solicitarCadena();
validarEmail(email) ? alert("El email es valido") : alert("El email no es valido");

// pasarla por la siguiente expresion regular para saber si es valido el email o no
// [a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}

function validarEmail(email){
    let er = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+\.[a-zA-Z]{2,4}(\.[a-zA-Z]{2,4})?$/;
    return er.test(email);
}