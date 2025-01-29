// Variables
let cantidadCombinaciones = 0;
let combinaciones = [];
let reintegro = 0;
let html = "";

// Funciones
function pedirCombinaciones() {
    
    if (confirm("¿Eres mayor de edad?")) {
        
        
        cantidadCombinaciones = parseInt(prompt("Introduce el número de combinaciones (1-8):"));
        
        if (cantidadCombinaciones < 1 || cantidadCombinaciones > 8) {
            alert("El número de combinaciones debe ser un número entre 1 y 8.");
            pedirCombinaciones();
        }

        generarCombinaciones(cantidadCombinaciones);
    } else {
        
        alert("Debes ser mayor de edad para jugar.");
    }
}

function generarCombinaciones(cantidad) {
    limpiarHTML();
    for (let i = 0; i < cantidad; i++) {
        let combinacion = [];
        while (combinacion.length < 6) {
            let numero = Math.floor(Math.random() * 49) + 1;
            if (!combinacion.includes(numero)) {
                combinacion.push(numero);
            }
        }
        combinacion.sort((a, b) => a - b);
        combinaciones.push(combinacion);
    }
    reintegro = Math.floor(Math.random() * 9) + 1;
    mostrarCombinaciones();
}

function mostrarCombinaciones() {
    
    combinaciones.forEach((combinacion) => {
        combinacion.forEach(numero => {
            if (numero < 10) {
                html += `<span class="numero">0${numero}</span>`;
            } else {
                html += `<span class="numero">${numero}</span>`;
            }
        });
        html += "<br id='limpiarFloat'>";
    });

    html += `<br><p class="reintegro"> <div id="recuadroReintegro">REINTEGRO <span class="numeroR">0${reintegro}</div></span></p>`;
    document.getElementById("combinacionesPrimitiva").innerHTML = html;
    
}

function limpiarHTML() {
    html = "";
    document.getElementById("combinacionesPrimitiva").innerHTML = "";
    combinaciones = [];
}