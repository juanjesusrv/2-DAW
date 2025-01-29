function calcularDiferenciaFechas() {
    // Solicitar las fechas y horas mediante ventanas emergentes
    const fecha1Str = prompt("Ingrese la primera fecha y hora en el formato YYYY/MM/DD HH:MM:SS:");
    const fecha2Str = prompt("Ingrese la segunda fecha y hora en el formato YYYY/MM/DD HH:MM:SS:");

    // Convertir las fechas ingresadas a objetos Date
    const fecha1 = new Date(fecha1Str.replaceAll("/", "-").replace(" ", "T"));
    const fecha2 = new Date(fecha2Str.replaceAll("/", "-").replace(" ", "T"));

    // Validar si las fechas son válidas
    if (isNaN(fecha1) || isNaN(fecha2)) {
        alert("Una o ambas fechas no son válidas. Intente nuevamente.");
        return;
    }

    // Calcular la diferencia en milisegundos
    let diff = Math.abs(fecha2 - fecha1); // Diferencia en ms

    // Calcular los componentes de tiempo
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff %= (1000 * 60 * 60 * 24); // Restar días

    const horas = Math.floor(diff / (1000 * 60 * 60));
    diff %= (1000 * 60 * 60); // Restar horas

    const minutos = Math.floor(diff / (1000 * 60));
    diff %= (1000 * 60); // Restar minutos

    const segundos = Math.floor(diff / 1000); // Restar segundos

    // Mostrar el resultado en la tabla
    document.getElementById("entrada").textContent = `${fecha1Str}\n${fecha2Str}`;
    document.getElementById("salida").textContent = `Entre ambas fechas han transcurrido ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos.`;
}

// Llamar a la función al cargar la página
window.onload = calcularDiferenciaFechas;
