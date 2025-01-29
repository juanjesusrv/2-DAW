let cad = "";

cad = prompt("Introduce una cadena de texto");

alert("La suma de los números de la cadena es: " + sumarNumeros(cad));

function sumarNumeros(cadena) {
    let suma = 0;
    let numeros = cadena.match(/\d+/g);
    if (numeros != null) {
        for (let i = 0; i < numeros.length; i++) {
            suma += parseInt(numeros[i]);
        }
    }
    return suma;
}