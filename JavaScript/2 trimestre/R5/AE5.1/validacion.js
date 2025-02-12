document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir envío inicial si hay errores
    let error = false;

    // Reglas de validación
    const reglas = {
        nombre: {
            regex: /^[A-Z][a-z]{2,9}$/,
            mensaje: "El nombre debe tener entre 3 y 10 caracteres alfabéticos, el primero con mayúscula."
        },
        apellido: {
            regex: /^[A-Z][a-z]{3,7}$/,
            mensaje: "El apellido debe tener entre 4 y 8 caracteres alfabéticos, el primero con mayúscula."
        },
        apellido2: {
            regex: /^[A-Z][a-z]{3,7}$/,
            mensaje: "El segundo apellido debe tener entre 4 y 8 caracteres alfabéticos, el primero con mayúscula (opcional).",
            opcional: true
        },
        telefono: {
            regex: /^\+\d{2} \d{3}-\d{3}-\d{3}$/,
            mensaje: "El teléfono debe tener el formato +99 999-999-999."
        },
        email: {
            regex: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            mensaje: "El email no es válido."
        },
        direccion: {
            regex: /^[A-Za-z]{2,20} [0-9]{1,3}$/,
            mensaje: "La dirección debe incluir un nombre y un número (ejemplo: Calle 123)."
        }
    };

    // Validar cada campo
    Object.keys(reglas).forEach(campo => {
        const input = document.getElementById(campo);
        const valor = input.value.trim();
        const { regex, mensaje, opcional } = reglas[campo];

        // Validar solo si es obligatorio o tiene valor
        if ((!opcional || valor) && !regex.test(valor)) {
            input.style.borderColor = "red";
            input.setCustomValidity(mensaje); // Mostrar mensaje nativo del navegador
            input.reportValidity(); // Forzar la visualización del mensaje
            error = true;
        } else {
            limpiarError(input); // Limpiar errores si el campo es válido
        }
    });

    // Si no hay errores, enviar formulario
    if (!error) {
        document.getElementById("miFormulario").submit();
    }
});

// Función para limpiar mensajes de error previos
function limpiarError(input) {
    input.style.borderColor = "initial";
    input.setCustomValidity(''); // Limpiar mensajes personalizados
}

// Escuchar eventos `input` para limpiar errores dinámicamente
Object.keys({
    nombre: {},
    apellido: {},
    apellido2: {},
    telefono: {},
    email: {},
    direccion: {}
}).forEach(campo => {
    const input = document.getElementById(campo);
    input.addEventListener("input", () => limpiarError(input)); // Limpiar errores mientras escribe
});
