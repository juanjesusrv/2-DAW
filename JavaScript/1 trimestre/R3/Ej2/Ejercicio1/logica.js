let cad = "";

cad = prompt("Introduce una cadena de texto");

alert("La cadena tiene " + contarVocales(cad) + " vocales");


function contarVocales(cad){
    let contador = 0;
    for (let i = 0; i < cad.length; i++){
        if (cad[i] === "a" || cad[i] === "e" || cad[i] === "i" || cad[i] === "o" || cad[i] === "u"){
            contador++;
        }
    }
    return contador;
}