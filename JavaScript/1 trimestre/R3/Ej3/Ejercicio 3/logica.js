
// Variables
let cantidadCombinaciones = 0;
let combinaciones = [];
let reintegro = 0;
let pleno15 = [];
let html = "";
let juegoActivo = 'primitiva';

// Funciones

// Cambiar entre juegos
function cambiarJuego(juego) {
    document.getElementById('tituloJuego').innerText = `Jugar a La ${juego.charAt(0).toUpperCase() + juego.slice(1)}`;
    document.getElementById('primitiva').style.display = juego === 'primitiva' ? 'block' : 'none';
    document.getElementById('quiniela').style.display = juego === 'quiniela' ? 'block' : 'none';
    juegoActivo = juego;
}

// Función para pedir el número de combinaciones a generar
function pedirCombinaciones() {
    if (confirm("¿Eres mayor de edad?")) {
        cantidadCombinaciones = parseInt(prompt("Introduce el número de combinaciones (1-8):"));
        if (cantidadCombinaciones < 1 || cantidadCombinaciones > 8) {
            alert("El número de combinaciones debe ser entre 1 y 8.");
            pedirCombinaciones();
        } else {
            generarCombinaciones(cantidadCombinaciones);
        }
    } else {
        alert("Debes ser mayor de edad para jugar.");
    }
}

// Función para generar combinaciones
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
    document.getElementById("comprobarBoletoPrimitiva").style.display = "block"; // Mostrar botón de comprobar
    document.getElementById("comprobarManualPrimitiva").style.display = "block"; // Mostrar botón de comprobar manualmente
}

// Función para mostrar las combinaciones generadas
function mostrarCombinaciones() {
    let html = "";
    combinaciones.forEach((combinacion) => {
        combinacion.forEach(numero => {
            html += `<span class="numero">${numero < 10 ? '0' + numero : numero}</span>`;
        });
        html += "<br id='limpiarFloat'>";
    });

    html += `<br><p class="reintegro">REINTEGRO <span class="numeroR">${reintegro < 10 ? '0' + reintegro : reintegro}</span></p>`;
    document.getElementById("combinacionesPrimitiva").innerHTML = html;
}

// Función para limpiar el HTML
function limpiarHTML() {
    document.getElementById("combinacionesPrimitiva").innerHTML = "";
    combinaciones = [];
}

// Comprobar boleto en La Primitiva
// Comprobar boleto en La Primitiva
function comprobarBoletoPrimitiva() {
    // Generar combinación ganadora aleatoria
    let combinacionGanadora = [];
    while (combinacionGanadora.length < 6) {
        let numero = Math.floor(Math.random() * 49) + 1;
        if (!combinacionGanadora.includes(numero)) {
            combinacionGanadora.push(numero);
        }
    }
    combinacionGanadora.sort((a, b) => a - b);
    
    // Generar reintegro aleatorio
    let reintegroGanador = Math.floor(Math.random() * 9) + 1;

    // Mostrar la combinación ganadora
    alert(`Combinación ganadora: ${combinacionGanadora.join(', ')} - Reintegro: ${reintegroGanador}`);

    // Comprobar las combinaciones generadas con la ganadora
    let combinacionesAcertadas = 0;
    combinaciones.forEach(combinacion => {
        let acertados = 0;
        combinacion.forEach(numero => {
            if (combinacionGanadora.includes(numero)) {
                acertados++;
            }
        });

        // Verificar si el reintegro coincide
        let reintegroAcertado = (reintegroGanador === reintegro);

        // Asignar premios según los aciertos
        if (acertados === 6 && reintegroAcertado) {
            combinacionesAcertadas++;
            alert(`¡Felicidades! Has acertado todos los números y el reintegro. Premio: 139.838.160 euros.`);
        } else if (acertados === 6) {
            combinacionesAcertadas++;
            alert(`¡Felicidades! Has acertado los 6 números. Premio: 13.983.816 euros.`);
        } else if (acertados === 5) {
            alert(`Has acertado 5 números. Premio: 2.330.636 euros.`);
        } else if (acertados === 4) {
            alert(`Has acertado 4 números. Premio: 55.491 euros.`);
        } else if (acertados === 3) {
            alert(`Has acertado 3 números. Premio: 1.032 euros.`);
        } else if (reintegroAcertado) {
            alert(`Has acertado el reintegro. Premio: 57 euros.`);
        } else {
            alert("No has acertado ninguna combinación.");
        }
    });

    if (combinacionesAcertadas === 0) {
        alert("No has acertado ninguna combinación entre las generadas.");
    }
}


function comprobarManualPrimitiva() {
    let combinacionManual = prompt("Introduce tu combinación (6 números separados por comas):");
    combinacionManual = combinacionManual.split(',').map(num => parseInt(num.trim()));
    let reintegroGanador = parseInt(prompt("Introduce el reintegro:"));

    // Validar el reintegro
    if (reintegroGanador < 1 || reintegroGanador > 9) {
        alert("El reintegro debe ser un número entre 1 y 9.");
        return;
    }

    if (combinacionManual.length === 6) {
        // Mostrar la combinación ganadora
        alert(`Combinación ganadora: ${combinacionManual.join(', ')} - Reintegro: ${reintegroGanador}`);
        
        let combinacionesAcertadas = 0;
        combinacionManual.forEach(numero => {
            if (combinaciones[0].includes(numero)) {
                combinacionesAcertadas++;
            } 
        });


        // Asignar premios según los aciertos
        if (combinacionesAcertadas === 6 && reintegroGanador === reintegro) {
            alert(`¡Felicidades! Has acertado todos los números y el reintegro. Premio: 139.838.160 euros.`);
        } else if (combinacionesAcertadas === 6) {
            alert(`¡Felicidades! Has acertado los 6 números. Premio: 13.983.816 euros.`);
        } else if (combinacionesAcertadas === 5) {
            alert(`Has acertado 5 números. Premio: 2.330.636 euros.`);
        } else if (combinacionesAcertadas === 4) {
            alert(`Has acertado 4 números. Premio: 55.491 euros.`);
        } else if (combinacionesAcertadas === 3) {
            alert(`Has acertado 3 números. Premio: 1.032 euros.`);
        } else if (reintegroGanador === reintegro) {
            alert(`Has acertado el reintegro. Premio: 57 euros.`);
        } else {
            alert("No has acertado ninguna combinación.");
        }
    } else {
        alert("Combinación no válida. Debes ingresar 6 números.");
    }
}





// La Quiniela
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

function generarCombinacion() {
    let combinacion = [];
    for (let i = 0; i < 14; i++) {
        let resultado = Math.floor(Math.random() * 3);
        combinacion.push(resultado);
    }
    return combinacion;
}

function generarBoleto() {
    for (let i = 0; i < cantidadCombinaciones; i++) {
        combinaciones.push(generarCombinacion());
    }
    mostrarBoleto();
    document.getElementById("comprobarBoletoQuiniela").style.display = "block"; // Mostrar botón de comprobar
    document.getElementById("comprobarManualQuiniela").style.display = "block"; // Mostrar botón de comprobar manualmente
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
            html += "<p>Partido " + (j + 1) + ": ";
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

        // Generar un valor aleatorio para el Pleno al 15
        const opcionesPleno15 = ["1", "X", "2"];
        pleno15[i] = opcionesPleno15[Math.floor(Math.random() * opcionesPleno15.length)];

        html += "<div class='pleno15'>";
        if (pleno15[i] === "1") {
            html += "<p>Pleno al 15: <span class='eleccion'>1</span> X 2</p>";
        } else if (pleno15[i] === "X") {
            html += "<p>Pleno al 15: 1 <span class='eleccion'>X</span> 2</p>";
        } else {
            html += "<p>Pleno al 15: 1 X <span class='eleccion'>2</span></p>";
        }
        html += "</div>";
        html += "</div>";
    }
    document.getElementById("combinacionesQuiniela").innerHTML = html;
}

// Comprobar boleto en La Quiniela
function comprobarBoletoQuiniela() {
    for (let i = 0; i < cantidadCombinaciones; i++) {
        let aciertos = 0;
        let aciertosPleno15 = false;
        let combinacionAleatoria = generarCombinacion();
        const opcionesPleno15 = ["1", "X", "2"];
        let pleno15Aleatorio = opcionesPleno15[Math.floor(Math.random() * opcionesPleno15.length)];

        if (pleno15[i] === pleno15Aleatorio) {
            aciertosPleno15 = true;
        }

        for (let j = 0; j < 14; j++) {
            if (combinaciones[i][j] === combinacionAleatoria[j]) {
                aciertos++;
            }
        }

        alert(`Combinación ${i + 1}: ${aciertos} aciertos y ${aciertosPleno15 ? 'Pleno al 15 acertado' : 'Pleno al 15 no acertado'}.`);

        // Asignar premios según los aciertos
        let mensajePremio = "";

        if  (aciertos > 0) {
            // Aplicar premios basados en la cantidad de aciertos
            if (aciertos === 14 && aciertosPleno15) {
                mensajePremio = `¡Felicidades! Has acertado todos los partidos y el Pleno al 15. Premio: 76.527.504 euros.`;
            } else if (aciertos === 14) {
                mensajePremio = `¡Felicidades! Has acertado todos los partidos. Premio: 4.782.969 euros.`;
            } else if (aciertos === 13) {
                mensajePremio = `Has acertado 13 partidos. Premio: 170.820 euros.`;
            } else if (aciertos === 12) {
                mensajePremio = `Has acertado 12 partidos. Premio: 13.140 euros.`;
            } else if (aciertos === 11) {
                mensajePremio = `Has acertado 11 partidos. Premio: 1.643 euros.`;
            } else if (aciertos === 10) {
                mensajePremio = `Has acertado 10 partidos. Premio: 299 euros.`;
            } else {
                mensajePremio = `Has acertado ${aciertos} partidos. No hay premio.`;
            }
        } else {
            mensajePremio = "No has acertado ninguna combinación.";
        }

        // Mostrar el resultado
        alert(mensajePremio);
    }
}


// Comprobar boleto manualmente en La Quiniela
function comprobarManualQuiniela() {
    let combinacionManual = prompt("Introduce tu combinación (14 partidos, separados por comas, usa 1, 2 o X):");
    combinacionManual = combinacionManual.split(',').map(num => num.trim().toLowerCase());

    // Validar la combinación manual
    if (combinacionManual.length !== 14 || !combinacionManual.every(num => ["1", "2", "x"].includes(num))) {
        alert("Combinación no válida. Debes ingresar 14 partidos usando los valores 1, 2 o X.");
        return;
    }

    // Convertir la combinación manual a números
    let combinacionNumerica = combinacionManual.map(num => {
        if (num === "1") return 0;  // 0=1
        if (num === "x") return 1;  // 1=X
        if (num === "2") return 2;  // 2=2
    });

    let pleno15Manual = prompt("Introduce el resultado del Pleno al 15 (1, 2 o X):").trim().toLowerCase();
    
    if (!["1", "2", "x"].includes(pleno15Manual)) {
        alert("Resultado del Pleno al 15 no válido. Debes ingresar 1, 2 o X.");
        return;
    }

    for (let i = 0; i < cantidadCombinaciones; i++) {

        let aciertos = 0;
        let aciertosPleno15 = false;

        // Comprobar los aciertos de los 14 partidos
        for (let j = 0; j < 14; j++) {
            if (combinaciones[i][j] === combinacionNumerica[j]) {
                aciertos++;
            }
        }

        // Comprobar el Pleno al 15
        if (pleno15[i].toLowerCase() === pleno15Manual) {
            aciertosPleno15 = true;
        }

        alert(`Combinación ${i + 1}: ${aciertos} aciertos y ${aciertosPleno15 ? 'Pleno al 15 acertado' : 'Pleno al 15 no acertado'}.`);


        // Asignar premios según los aciertos
        let mensajePremio = "";

        if  (aciertos > 0) {
            // Aplicar premios basados en la cantidad de aciertos
            if (aciertos === 14 && aciertosPleno15) {
                mensajePremio = `¡Felicidades! Has acertado todos los partidos y el Pleno al 15. Premio: 76.527.504 euros.`;
            } else if (aciertos === 14) {
                mensajePremio = `¡Felicidades! Has acertado todos los partidos. Premio: 4.782.969 euros.`;
            } else if (aciertos === 13) {
                mensajePremio = `Has acertado 13 partidos. Premio: 170.820 euros.`;
            } else if (aciertos === 12) {
                mensajePremio = `Has acertado 12 partidos. Premio: 13.140 euros.`;
            } else if (aciertos === 11) {
                mensajePremio = `Has acertado 11 partidos. Premio: 1.643 euros.`;
            } else if (aciertos === 10) {
                mensajePremio = `Has acertado 10 partidos. Premio: 299 euros.`;
            } else {
                mensajePremio = `Has acertado ${aciertos} partidos. No hay premio.`;
            }
        } else {
            mensajePremio = "No has acertado ninguna combinación.";
        }

        // Mostrar el resultado
        alert(mensajePremio);
    }
}

