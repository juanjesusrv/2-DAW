let cad = prompt("Introduce una frase o una palabra: ");

if(palindromo(cad)){
    alert("Es un palíndromo");
}else{
    alert("No es un palíndromo");
}

function palindromo(cad){
    //Eliminar los espacios de cad
    cad = cad.replace(/ /g, "");
    let cad2 = cad.split("").reverse().join("").toLowerCase();
    if(cad == cad2){
        return true;
    }else{
        return false;
    }
}