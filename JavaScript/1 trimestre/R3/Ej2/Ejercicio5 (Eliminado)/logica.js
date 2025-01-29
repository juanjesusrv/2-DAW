let cad = "";

cad = prompt("Introduce una cadena de texto");

alert(`La cadena con mayúsculas es: ${ponerMayusculas(cad)}`);

function ponerMayusculas(cad){

    let nuevaCad = "";

    for (let i = 0; i < cad.length; i++){
        if (cad[i-1] === " " || i === 0){
            nuevaCad += cad[i].toUpperCase();
        } else {
            nuevaCad += cad[i];
        }
    }

    return nuevaCad;

}
