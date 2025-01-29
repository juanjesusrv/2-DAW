document.addEventListener("DOMContentLoaded", () => {

//getElementById --> Devuelve el primer elemento que cumpla la condición
// En este caso, el primer elemento con el id "p2"
let p2_1 = document.getElementById("p2");
console.log(p2_1.textContent + " obtenido mediante getElementById");

//getElementsByTagName --> Devuelve un array con todos los elementos que cumplan la condición
// En este caso, todos los elementos "p"
let p2_2 = document.getElementsByTagName("p")[1];
console.log(p2_2.textContent + " obtenido mediante getElementsByTagName");

//getElementsByClassName --> Devuelve un array con todos los elementos que cumplan la condición
// En este caso, todos los elementos con la clase "parrafo"
let p2_3 = document.getElementsByClassName("parrafo")[1];
console.log(p2_3.textContent + " obtenido mediante getElementsByClassName");

//querySelector --> Devuelve el primer elemento que cumpla la condición
// En este caso, el primer elemento con el id "p2"
let p2_4 = document.querySelector("#p2");
console.log(p2_4.textContent + " obtenido mediante querySelector");

//querySelectorAll --> Devuelve un array con todos los elementos que cumplan la condición
// En este caso, todos los elementos con la clase "parrafo"
let p2_5 = document.querySelectorAll(".parrafo")[1];
console.log(p2_5.textContent + " obtenido mediante querySelectorAll");

});

function eliminarParrafo() {
    let p = document.getElementById("p4");

    p.remove();
    console.log("4º Parrafo eliminado");
}
function crearParrafo(){
    
    let p = document.createElement("p");
    let p3 = document.createElement("p");
    let respuesta = document.querySelectorAll(".parrafo");

    p.textContent = "Nuevo parrafo creado mediante botón";
    p3.textContent = "La diferencia entre innerHTML y textContent es que innerHTML devuelve el contenido HTML, mientras que textContent devuelve el contenido de texto.";

    document.body.appendChild(p); //AppendChild es para introducir un elemento al final del body
    
    //insertAdjacentElement es para insertar un elemento después de otro
    //El primer parámetro indica la posición en la que se insertará el nuevo elemento
    //El segundo parámetro indica el elemento que se insertará
    respuesta[1].insertAdjacentElement('afterend', p3);
}
function modificarImagen(){
    let img = document.getElementById("img");
    
    img.src = "./tridente.png";
}
function modificarFormulario(){
    document.querySelector('label[for="nombre"]').textContent = "Año de nacimiento";
    document.querySelector('input[name="nombre"]').type = "date";
}

function escribir(){
    document.write("Esto es lo que pasa por usar el método document.write una vez la página se ha cargado");
}