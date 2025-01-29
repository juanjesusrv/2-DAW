cad = "Consiste en lanzar    aros";

menu(cad);

function menu(cad){
    let opcion = 0;
    let cadAux

    while(opcion != -1){
        opciones();
        opcion = parseInt(prompt("Introduce una opción: "));
        switch(opcion){
            case 1:
                alert("Número total de caracteres: " + cad.length);
                break;
            case 2:
                alert("El caracter que ocupa la octava posicion es: " + cad.substring(8,9))
                break;
            case 3:
                alert("El código Unicode del primer carácter es: " + cad.charCodeAt(0));
                break;
            case 4:
                alert(cad.concat("¿roto?...¿o mejorado?"))
                let respuesta = prompt("¿Se modifica la primera cadena? (y/n/yes/no)")
                if (respuesta.toLowerCase() == "y" || respuesta.toLowerCase() == "yes"){
                    cad = cad.concat("¿roto?...¿o mejorado?");
                    alert("La cadena se ha modificado correctamente. ")
                } else if (respuesta.toLowerCase() == "n" || respuesta.toLowerCase() == "no"){
                    alert("La cadena no se ha modificado.")
                } else {
                    alert("Opción incorrecta.")
                }
                break;
            case 5:
                if(cad.endsWith("aro")){
                    alert("La cadena termina con los caracteres 'aro'.")
                } else {
                    alert("La cadena no termina con los caracteres 'aro'.")
                }
                break;
            case 6:
                alert("El valor Unicode 65 es: " + String.fromCharCode(65));
                break;
            case 7:
                if(cad.includes("lanzar")){
                    alert("La cadena contiene los caracteres 'lanzar'.")
                } else {
                    alert("La cadena no contiene los caracteres 'lanzar'.")
                }
                break;
            case 8:
                alert("La posición que ocupa el primer carácter 'a' es: " + cad.indexOf("a"));
                break;
            case 9:
                alert("La posición que ocupa el último carácter 'a' es: " + cad.lastIndexOf("a"));
                break;
            case 10:
                cadAux = "¿Consiste en lazar aros";
                if(cad.localeCompare(cadAux) == -1){
                    alert("La cadena 'Consiste en lanzar aros' iría en primer lugar.")
                } else {
                    alert("La cadena '¿Consiste en lazar aros' iría en primer lugar.")
                }

                break;
            case 11:
                let expresion = /ar/g;
                let coincidencias = cad.match(expresion);
                alert("Coincidencias: " + coincidencias);
                break;
            case 12:
                alert(cad.repeat(3));
                break;
            case 13:
                alert(cad.replace("lanzar", "coger"));
                break;
            case 14:
                alert("La posición de 'ste' es: " + cad.indexOf("ste"));
                break;
            case 15:
                alert("Los caracteres del primero al quinto son: " + cad.substring(0,5));
                break;
            case 16:
                alert(cad.split(" "));
                break;
            case 17:
                if(cad.startsWith("Consiste en")){
                    alert("La cadena comienza con los caracteres 'Consiste en'.")
                } else {
                    alert("La cadena no comienza con los caracteres 'Consiste en'.")
                }
                break;
            case 18:
                alert("Siete caracteres a partir del segundo caracter: " + cad.substring(1,8));
                break;
            case 19:
                alert("Todos los caracteres a partir del cuarto caracter: " + cad.substring(3));
                break;
            case 20:
                alert(cad.toUpperCase());
                break;
            case 21:
                alert(cad.toLowerCase());
                break;
            case 22:
                let cadModificada = cad.split(" ").join(" ");
                alert("Cadena original: " + cad + "\n" + "Cadena modificada: " + cadModificada);
                break;
            default:
                alert("Opción incorrecta.");
                break;
        }
    }
}

function opciones(){
    alert("1. Indica el número total de caracteres incluyendo los espacios en blanco." + "\n" +
          "2. Obtén el carácter que ocupa la octava posición." + "\n" +
          "3. Obtén el código Unicode del primer carácter." + "\n" +
          "4. Concatena la cadena con la cadena“ ¿roto? … ¿o mejorado?”. ¿Se modifica la primera cadena? (Muestra la respuesta a la pregunta también)." + "\n" + 
          "5. Comprueba si la cadena termina con los caracteres “aro”." + "\n" +
          "6. Convierte el valor Unicode 65 a su carácter equivalente." + "\n" +
          "7. Comprueba si la cadena contiene los caracteres “lanzar”." + "\n" +
          "8. Indica la posición que ocupa el primer carácter “a” de la cadena." + "\n" +
          "9. Indica la posición que ocupa el último carácter “a” de la cadena." + "\n" +
          "10. Compara la cadena con la cadena “Consiste en lanzar aros”. ¿Cuál iría en primer lugar? (Muestra la respuesta a la pregunta justificando la respuesta)" + "\n" +
          "11. Obtén todas las coincidencias de la cadena con la expresión regular “/ar/g”" + "\n" +
          "12. Obtén una nueva cadena con 3 repeticiones de la cadena actual." + "\n" +
          "13. Reemplaza los caracteres “lanzar” por “coger”." + "\n" +
          "14. Busca los caracteres “ste” en la cadena indica su posición." + "\n" +
          "15. Obtén de la cadena los caracteres del primero al quinto." + "\n" +
          "16. Obtén un array con todas las palabras de la cadena." + "\n" +
          "17. Comprueba si la cadena comienza con los caracteres “Consiste en”." + "\n" +
          "18. Obtén siete caracteres de la cadena a partir del segundo carácter." + "\n" +
          "19. Obtén todos los caracteres de la cadena a partir del cuarto carácter." + "\n" +
          "20. Convierte todos los caracteres de la cadena a mayúsculas." + "\n" +
          "21. Convierte todos los caracteres de la cadena a minúsculas." + "\n" +
          "22. Muestra la cadena original, deja la cadena con un único espacio en blanco entre palabras y muestra la cadena modificada. Resolverlo sin usar expresiones regulares ni arrays, solo el objeto String.");

}


