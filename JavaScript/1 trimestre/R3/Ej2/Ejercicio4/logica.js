let cad = "";
let cha = "";

cad = prompt("Introduce una cadena de texto");
cha = prompt("Introduce el caracter que quieres buscar");

alert(`La cadena tiene ${contarCaracter(cad, cha)} veces el caracter ${cha}`);

function contarCaracter(cad, cha){

    let contador = 0;

    //De forma recursiva quiero que cuente las veces que aparece el caracter en la cadena
    //Si la cadena está vacía, devuelvo 0
    //Si el primer caracter de la cadena es igual al caracter que busco, sumo 1 al contador

    if(cad.length == 0){
        return 0;
    } else if(cad.charAt(0) == cha){
        contador++;
        contador += contarCaracter(cad.substring(1), cha);
    } else {
        contador += contarCaracter(cad.substring(1), cha);
    }

    return contador;

}
