let codigoCliente = prompt("Introduce el código de cliente");

let mensaje = comprobarCodigoCliente(codigoCliente);

alert(mensaje);


function comprobarCodigoCliente(codigoCliente) {

    let cad = "";
    let cadError = "";
    let validador = true;

    if (codigoCliente.length <= 6 && codigoCliente.length >= 9) {
        cadError = "Error: Longitud de código incorrecto";
        return cadError;
    }

    if (codigoCliente.substring(0, 2) == "CP" || codigoCliente.substring(0, 2) == "CE") {
        if (codigoCliente.substring(0, 2) == "CP"){
            cad = "El código introducido pertenece a un cliente particular";
        } else
            cad = "El código introducido pertenece a un cliente empresarial";
    } else {
        validador = false;
        cadError += "Error: Tipo de cliente no reconocido";
    }

    

    if (codigoCliente.substring(3, 5) == "10" ||
        codigoCliente.substring(3, 5) == "11" ||
        codigoCliente.substring(3, 5) == "12" ||
        codigoCliente.substring(3, 5) == "20") {

        switch (codigoCliente.substring(3, 5)) {
            case "10":
                cad += " de origen Local";
                break;
            case "11":
                cad += " de origen Autonómico";
                break;
            case "12":
                cad += " de origen Nacional";
                break;
            case "20":
                cad += " de origen Internacional";
                break;
        }
    } else {
        validador = false;
        cadError += "; Error: Región no reconocida";
    }

    if (codigoCliente.substring(6, 8) >= 0 && codigoCliente.substring(6, 8) <= 99) {
        cad += ` con ${codigoCliente.substring(6, 8)} de antigüedad`;
    } else {
        validador = false;
        cadError += "; Error: La antigüedad no es válida";
    }

    if (!(codigoCliente[2] == "-" && codigoCliente[5] == "-") && validador) {
        validador = false;
        cadError += "; Error: Faltan los guiones";
    }

    if (validador) {
        return cad;
    } else {
        return cadError;
    }
}

