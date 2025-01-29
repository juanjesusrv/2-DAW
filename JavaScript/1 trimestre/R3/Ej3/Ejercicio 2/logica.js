// Variables

let cantidadCombinaciones = 0;
let combinaciones = [];
let pleno15 = [];
let html = "";

// Funciones
function solicitarCombinaciones() {
    if (confirm("¿Eres mayor de edad?")) {
        
        limpiarHTML();
        cantidadCombinaciones = parseInt(prompt("Introduce el número de combinaciones (1-8):"));
        if (cantidadCombinaciones < 1 || cantidadCombinaciones > 8) {
            alert("Introduce un número entre 1 y 8.");
            solicitarCombinaciones();
        } else {
            generarBoleto();
        }
    } else {
        alert("Debes ser mayor de edad para jugar.");
    }
}
function limpiarHTML() {
    html = "";
    document.getElementById("combinacionesQuiniela").innerHTML = "";
    combinaciones = [];
}

function generarCombinacion() {
    let combinacion = [];
    for (let i = 0; i < 14; i++) {
        let resultado = Math.floor(Math.random() * 3);
        combinacion.push(resultado);
    }
    return combinacion;
}

function generarPleno15() {  
    let resultado = Math.floor(Math.random() * 3);
    return resultado;
}

function generarBoleto() {
    for (let i = 0; i < cantidadCombinaciones; i++) {
        combinaciones.push(generarCombinacion());
        pleno15.push(generarPleno15());
    }

    mostrarBoleto();
}

function mostrarBoleto() {
    html = "";

    for (let i = 0; i < cantidadCombinaciones; i++) {
        html += "<div class='combinacion'>";
            html += "<div class='numeroCombinacion'>";
                html += "<h3>Combinación " + (i + 1) + "</h3><hr>";
            html += "</div>";
            html += "<div class='quiniela'>";
                    for (let j = 0; j < 14; j++) {
                        html += "<p> Partido " + (j + 1) + ": ";

                            if (combinaciones[i][j] === 0) {
                                html += "<span class='eleccion'>1</span> X 2";
                            } else if (combinaciones[i][j] === 1) {
                                html += "1 <span class='eleccion'>X</span> 2";
                            } else {
                                html += "1 X <span class='eleccion'>2</span>";
                            }
                        html += "</p>";
                    }
                html += "<hr>";
            html += "</div>";
            html += "<div class='pleno15'>";
                html += "<p><b>Pleno al 15:</b>  ";
                if (pleno15[i] === 0) {
                    html += "<span class='eleccion'>1</span> X 2";
                } else if (pleno15[i] === 1) {
                    html += "1 <span class='eleccion'>X</span> 2";
                } else {
                    html += "1 X <span class='eleccion'>2</span>";
                }
                html += "</p>";
            html += "</div>";
        html += "</div>";
    }

    document.getElementById("combinacionesQuiniela").innerHTML = html;
}

