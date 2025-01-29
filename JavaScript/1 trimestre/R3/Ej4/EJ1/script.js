window.onload = function() {
    // Obtener el elemento con el id "entrada"
    const entrada = document.getElementById("entrada");
    
    // Obtener el elemento con el id "salida"
    const salida = document.getElementById("salida");
    
    // Función para actualizar la hora y el mensaje
    function actualizarHora() {
        // Obtener la hora actual
        const now = new Date();
        
        // Formatear la hora como HH:MM:SS
        // Usamos padStart para agregar un 0 si el número es menor a 10
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        
        // Mostrar la hora actual en el td con id "entrada"
        entrada.textContent = `La hora actual es: ${hours}:${minutes}:${seconds}`;
        
        // Obtener el nombre del día de la semana
        const diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
        const diaSemana = diasSemana[now.getDay()];
        
        // Determinar el mensaje de "salida" según la hora del día
        let mensajeSalida = "";
        if (now.getHours() >= 6 && now.getHours() < 12) {
            // De 6 AM a 12 PM
            mensajeSalida = `Buenos días, que tenga un feliz ${diaSemana}`;
        } else if (now.getHours() >= 12 && now.getHours() < 20) {
            // De 12 PM a 8 PM
            mensajeSalida = `Buenas tardes, disfrute de su tarde del ${diaSemana}`;
        } else {
            // De 8 PM a 6 AM
            mensajeSalida = `Buenas noches, le deseamos lo mejor para el ${diasSemana[(now.getDay() + 1) % 7]}`;
        }
        
        // Mostrar el mensaje de "salida" en el td con id "salida"
        salida.textContent = mensajeSalida;
    }

    // Llamar a la función actualizarHora cada segundo (1000 ms)
    setInterval(actualizarHora, 1000);

    // Llamar una vez para inicializar la hora y el mensaje inmediatamente
    actualizarHora();
};
