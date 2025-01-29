// Añadimos el método getWeek al objeto Date
Date.prototype.getWeek = function() {
    // Copiar la fecha actual
    const fecha = new Date(this.getTime());

    // Establecer la fecha al primer día del año (1 de enero)
    fecha.setMonth(0, 1);  // Primer día del año
    fecha.setHours(0, 0, 0, 0);  // Asegurarnos de que la hora sea medianoche

    // Obtener el día de la semana del 1 de enero (0 = domingo, 1 = lunes, ..., 6 = sábado)
    const diaSemana = fecha.getDay();

    // Ajustar la fecha para que sea el lunes de la primera semana
    const ajuste = (diaSemana <= 4 ? 1 : 8) - diaSemana; // Ajustamos al primer lunes  (4 = jueves, 8 = lunes)

    // Mover la fecha al lunes de la primera semana del año
    fecha.setDate(fecha.getDate() + ajuste);

    // Ahora calculamos cuántos días han pasado desde el primer lunes del año
    const diff = this - fecha; // Diferencia entre la fecha introducida y el primer lunes del año en milisegundos
    const semanas = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));  // Convertimos en semanas

    // Si la fecha está en la última semana del año anterior, se debe calcular la semana del 31 de diciembre
    if (semanas <= 0) {
        // Ajustar al 31 de diciembre del año anterior
        const ultimoDia = new Date(this.getFullYear() - 1, 11, 31);
        return ultimoDia.getWeek();  // Devolvemos la semana del último día del año anterior
    }

    // Devolver el número de semana ISO 8601
    return semanas + 1;
}

// Función para pedir la fecha al usuario
function pedirFecha() {
    // Pedimos la fecha al usuario (en formato dd/mm/yyyy)
    const fechaStr = prompt("Introduce una fecha en formato (DD/MM/YYYY):");

    // Convertimos la cadena de fecha al formato ISO (YYYY-MM-DD) necesario para trabajar en JavaScript
    const partesFecha = fechaStr.split('/');
    const fechaISO = new Date(`${partesFecha[2]}-${partesFecha[1]}-${partesFecha[0]}`);

    // Verificamos que la fecha sea válida
    if (isNaN(fechaISO)) {
        alert("La fecha introducida no es válida. Intenta de nuevo.");
    } else {
        // Obtener el número de la semana
        const semana = fechaISO.getWeek();

        // Actualizamos las celdas de la tabla con la fecha y la semana
        document.getElementById("entrada").textContent = fechaStr;
        document.getElementById("salida").textContent = "El número de semana para la fecha introducida es " + semana;
    }
}

// Esperamos que el documento se haya cargado para ejecutar la función
window.onload = function() {
    pedirFecha();
};
