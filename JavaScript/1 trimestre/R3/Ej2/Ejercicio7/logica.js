let cad = prompt("Introduce una frase: ");

let palabra = prompt("Introduce una palabra: ");
let palabra2 = prompt("Introduce otra palabra: ");

let resultado = insertarPalabra(cad, palabra, palabra2);
alert(resultado);

/** Ejercicio 7. Realiza una aplicación web dónde se solicite por pantalla, mediante una
ventana emergente, al usuario una frase y dos palabras.
Crea una función que reciba tres argumentos: la frase y las dos palabras anteriores, como
resultado la función insertará la segunda palabra detrás de la primera con un espacio por
delante y por detrás. Si no se encuentra la palabra después de la que insertar se devuelve
la frase original.
Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función
anterior. */

function insertarPalabra(frase, palabra, palabra2) {
    let palabras = frase.split(" ");
    let pos = palabras.indexOf(palabra);
    if (pos == -1) {
        return frase;
    }
    palabras.splice(pos + 1, 0, palabra2);
    return palabras.join(" ");
}