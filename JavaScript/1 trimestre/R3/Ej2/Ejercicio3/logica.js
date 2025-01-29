let cad = "";

cad = prompt("Introduce una cadena de texto");

alert(`La cadena tiene ${contarEspacios(cad)} espacios, ${contarDigitos(cad)} dígitos y ${contarLetras(cad)} letras`);

function contarEspacios(cad) {
    let contador = 0;
    for (let i = 0; i < cad.length; i++) {
        if (cad[i] === " ") {
            contador++;
        }
    }
    return contador;
}

function contarDigitos(cad) {
    let contador = 0;
    for (let i = 0; i < cad.length; i++) {
        if (!isNaN(cad[i])) {
            contador++;
        }
    }
    return contador;
}

function contarLetras(cad) {
    let contador = 0;
    for (let i = 0; i < cad.length; i++) {
        if (isNaN(cad[i])) {
            contador++;
        }
    }
    return contador;
}