let cad = prompt("Introduce una cadena: ");
let cad2 = prompt("Introduce otra cadena: ");

let cadAux = buscarCaracteresIguales(cad, cad2);

alert(cadAux);

function buscarCaracteresIguales(cad, cad2) {
    let cadAux = "";

    cad = cad.toLowerCase();
    cad2 = cad2.toLowerCase();

    for (let i = 0; i < cad.length; i++) {
        for (let j = 0; j < cad2.length; j++) {
            if (cad.charAt(i) == cad2.charAt(j)) {
                if (!cadAux.includes(cad.charAt(i))) { // Si la cadena auxiliar no contiene el carácter repetido lo añade
                    cadAux += cad.charAt(i);
                }
            }
        }
    }

    // Ordenar la cadena auxiliar de forma alfabética
    cadAux = cadAux.split("").sort().join("");

    return cadAux;
}

