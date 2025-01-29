// Implementa el juego del buscaminas en JS.
//  1. Definir un tablero, en un array en 3x3, con bombas y cajas sin abrir.
//  2. A continuacion el usuario introducirá una coordenada. Por ejemplo 1,1.
//  3. El programa mostrará si dicha cordenada está vacía o contiene una mina, cambiando el tablero por dicha acción.
//  4. No se puede volver a abrir una caja ya abierta.
//  5. Si el usuario ha encontrado todas las cajas sin minar, mostrará un mensaje de felicitación.
//  6. Si el usuario ha encontrado una mina, mostrará un mensaje de que ha perdido.

// Iconos 💣 📦 🚩

// Variables globales

const tablero = [
    ["A", "A", "B"],
    ["B", "B", "B"],
    ["B", "B", "B"]
];

let tableroUsuario = [
    ["C", "C", "C"],
    ["C", "C", "C"],
    ["C", "C", "C"]
];


var coordenada = [0, 0];



// Función para pedir las coordenadas al usuario
function pedirCoordenadas() { //Funcion para pedir las coordenadas al usuario y comprobar que son correctas

   
        let fila = prompt("Introduce la fila: ");

        while (fila < 1 || fila > 3) {
            fila = prompt("Introduce una fila valida: ");
        }

        let columna = prompt("Introduce la columna: ");

        while (columna < 1 || columna > 3) {
            columna = prompt("Introduce una columna valida: ");
        }


    coordenada[0] = fila;
    coordenada[1] = columna;

    if (tableroUsuario[fila - 1][columna - 1] === "A") {
        alert("Celda ya abierta");
        pedirCoordenadas();
    }

    return coordenada;
}


/** Función para elegir una celda, coomprobar si es una bomba o no,  mostrat el tablero y por ultimo comprobar si el tablero esta completo */
function celdaPulsada(tablero, tableroUsuario, coordenada) {
    abrirCaja(tablero, tableroUsuario, coordenada);
    mostrarTablero(tableroUsuario);
}

/** Función para abrir una caja */
function abrirCaja(tablero, tableroUsuario, coordenada) {
    let filaAux = coordenada[0];
    let columnaAux = coordenada[1];

    if (tablero[filaAux - 1][columnaAux - 1] === "B") {
        tableroUsuario[filaAux - 1][columnaAux - 1] = "B";
    } else {
        tableroUsuario[filaAux - 1][columnaAux - 1] = "A";
    }
}


/** Función para mostrar el tablero */
function mostrarTablero(tableroUsuario) {

    let html = "<table>";
    for (let i = 0; i < tableroUsuario.length; i++) {
        html += "<tr>";
        for (let j = 0; j < tableroUsuario[i].length; j++) {
            if (tableroUsuario[i][j] === "C") {
                html += "<td id='celda" + i + j + "'>📦</td>";
            } else if (tableroUsuario[i][j] === "A") {
                html += "<td id='celda" + i + j + "'>🚩</td>";
            } else if (tableroUsuario[i][j] === "B") {
                html += "<td id='celda" + i + j + "'>💣</td>";
            }
        }
        html += "</tr>";
    }
    html += "</table>";
    
    document.getElementById("tablero").innerHTML = html;
}


/** Mostrar el tablero principal cuando se pierda o se gane la partida*/
function mostrarTableroFinal(tablero) {
        
        let html = "<table>";
        for (let i = 0; i < tablero.length; i++) {
            html += "<tr>";
            for (let j = 0; j < tablero[i].length; j++) {
                if (coordenada[0] - 1 === i && coordenada[1] - 1 === j && tablero[i][j] === "B") {
                    html += "<td id='celda" + i + j + "'>💥</td>";
                } else {
                    if (tablero[i][j] === "A") {
                        html += "<td id='celda" + i + j + "'>🚩</td>";
                    } else if (tablero[i][j] === "B") {
                        html += "<td id='celda" + i + j + "'>💣</td>";
                    }
                }
            }
            html += "</tr>";
        }
        html += "</table>";
        document.getElementById("tablero").innerHTML = html;
} 


// Función para rellenar el tablero
function rellenarHTML(tableroUsuario) {
    let html = "<table>";
    for (let i = 0; i < tableroUsuario.length; i++) {
        html += "<tr>";
        for (let j = 0; j < tableroUsuario[i].length; j++) {
            html += "<td id='celda" + i + j + "'>📦</td>";
        }
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("tablero").innerHTML = html;
}

// Función para comprobar si el tablero esta completo 
function comprobarTablero(tableroUsuario) {

    let cont = 0;
    let numBombas = 0;

    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j] === "B") {
                numBombas++;
            }
        }
    }

    for (let i = 0; i < tableroUsuario.length; i++) {
        for (let j = 0; j < tableroUsuario[i].length; j++) {
            
            if (tableroUsuario[i][j] === "B") {
                document.getElementById("resolucion").innerHTML = "HAS PERDIDO!!";

                mostrarTableroFinal(tablero);

                let boton = document.getElementById("coordenadas");
                boton.innerHTML = "Reiniciar";

                return true;
            }
            

            if (tableroUsuario[i][j] === "A") {
                cont++;
            }
            if ((cont + numBombas) === 9) {
                document.getElementById("resolucion").innerHTML = "HAS GANADO!!";

                mostrarTableroFinal(tablero);

                let boton = document.getElementById("coordenadas");
                boton.innerHTML = "Reiniciar";

                return true;
            }
                
        }
    }
    return false;
}


// Funcion para reiniciar el tablero del usuario
function reiniciarTablero(tableroUsuario) {
    for (let i = 0; i < tableroUsuario.length; i++) {
        for (let j = 0; j < tableroUsuario[i].length; j++) {
            tableroUsuario[i][j] = "C";
        }
    }
}


// Reiniciar el tablero y el juego
function reiniciarJuego() {

    rellenarHTML(tableroUsuario);
    reiniciarTablero(tableroUsuario);
    document.getElementById("resolucion").innerHTML = "";

    let boton = document.getElementById("coordenadas");
    boton.innerHTML = "Introducir coordenadas";
}

// Introducir coordenadas y comprobar si el tablero esta completo
function introducirCoordenadas() {

    if (comprobarTablero(tableroUsuario) === false) {
        pedirCoordenadas();
        celdaPulsada(tablero, tableroUsuario, coordenada);
        comprobarTablero(tableroUsuario);
    } else {
        reiniciarJuego();
    }
}

  



