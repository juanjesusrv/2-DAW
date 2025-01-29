document.addEventListener("DOMContentLoaded", () => {
// Para el index

function sistemaOperativo() {
    if (navigator.userAgent.indexOf("Windows") != -1) {
        so = "Windows";
    } else if (navigator.userAgent.indexOf("Mac") != -1) {
        so = "Mac";
    } else if (navigator.userAgent.indexOf("Linux") != -1) {
        so = "Linux";
    }

    return so;
}

document.getElementById("so").innerHTML = sistemaOperativo();

function nuevaVentana(){
    window.open("./pop.html", "_blank", "width=400, height=" + screen.height);
}

document.getElementById("download").addEventListener("click", nuevaVentana);


});

// Para el pop

document.addEventListener("DOMContentLoaded", () => {

function navegador(){
    if (navigator.userAgent.indexOf("Firefox") != -1) {
        nav = "Firefox";
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        nav = "Chrome";
    } else if (navigator.userAgent.indexOf("Edge") != -1) {
        nav = "Edge";
    }

    return nav;
}

function versionNavegador(){
    let userAgent = navigator.userAgent;
    let version;

    if (userAgent.indexOf("Firefox") != -1) {
        version = userAgent.match(/Firefox\/([0-9\.]+)/)[1];
    } else if (userAgent.indexOf("Chrome") != -1) {
        version = userAgent.match(/Chrome\/([0-9\.]+)/)[1];
    } else if (userAgent.indexOf("Edge") != -1) {
        version = userAgent.match(/Edg\/([0-9\.]+)/)[1];
    }

    return version;
}

document.getElementById("navegador").innerHTML = navegador();
document.getElementById("nav").innerHTML = navegador();
document.getElementById("version").innerHTML = versionNavegador();


    function latitud(callback) { //callback es una función que se pasa como argumento a otra función y se invoca dentro de la función externa para completar alguna acción
        navigator.geolocation.getCurrentPosition(function(position){ // Devuelve la posición actual del dispositivo
            callback(position.coords.latitude); // Devuelve la latitud de la posición actual
        });
    }
    latitud(function(lat) {
        document.getElementById("latitud").innerHTML = lat;
    });
    
    function longitud(callback) {
        navigator.geolocation.getCurrentPosition(function(position){
            callback(position.coords.longitude);
        });
    }
    longitud(function(lon) {
        document.getElementById("longitud").innerHTML = lon;
    });
        
    
});

document.addEventListener("DOMContentLoaded", () => {
    // Función para detectar el tipo de dispositivo
    function detectarDispositivo() {
        const userAgent = navigator.userAgent.toLowerCase();

        // Detectar dispositivos móviles
        if (/android|iphone|ipad|ipod|blackberry|mini|windows\sce|palm/i.test(userAgent)) {
            return "movil"; // Identifica como dispositivo móvil
        } else {
            return "escritorio"; // Identifica como dispositivo de escritorio
        }
    }

    // Preseleccionar el dispositivo correspondiente
    const dispositivo = detectarDispositivo();
    if (dispositivo === "movil") {
        document.getElementById("movil").checked = true; // Selecciona la opción móvil
    } else {
        document.getElementById("escritorio").checked = true; // Selecciona la opción escritorio
    }
});