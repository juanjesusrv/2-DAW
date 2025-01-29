// Función para obtener el número de días del mes
function obtenerDiasDelMes(fecha) {
    // Obtener el año y mes de la fecha
    const anio = fecha.getFullYear();
    const mes = fecha.getMonth(); // Los meses en JS van de 0 a 11

    // Crear una nueva fecha para el primer día del siguiente mes
    const fechaUltimoDia = new Date(anio, mes + 1, 0); // Día 0 del siguiente mes nos da el último día del mes actual

    // Devuelve el día de esa fecha, que es el número de días en ese mes
    return fechaUltimoDia.getDate();
}

// Función que solicita la fecha al usuario
function calcularDiasDelMes() {
    // Pedir la fecha mediante una ventana emergente
    const fechaStr = prompt("Ingrese una fecha en formato YYYY/MM/DD:");

    // Validar que la fecha ingresada tenga el formato correcto
    const fechaArray = fechaStr.split("/");

    if (fechaArray.length === 3) {
        const anio = parseInt(fechaArray[0], 10);
        const mes = parseInt(fechaArray[1], 10) - 1;  // Restamos 1 porque en JS los meses van de 0 a 11
        const dia = parseInt(fechaArray[2], 10);

        // Crear la fecha a partir del año, mes y día
        const fecha = new Date(anio, mes, dia);

        // Validar si la fecha es válida
        if (isNaN(fecha)) {
            alert("La fecha ingresada no es válida. Intente nuevamente.");
            return;
        }

        // Obtener el número de días del mes
        const dias = obtenerDiasDelMes(fecha);

        // Mostrar el resultado en la tabla
        document.getElementById("entrada").textContent = fechaStr;
        document.getElementById("salida").textContent = `${dias} días`;
    } else {
        alert("La fecha no está en el formato correcto (YYYY/MM/DD).");
    }
}

// Llamar a la función al cargar la página
window.onload = calcularDiasDelMes;

