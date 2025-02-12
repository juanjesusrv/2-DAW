document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir envío si hay errores
    let error = false;

    // Validar nombre
    const nombre = document.getElementById("nombre");
    if (!/^[A-Z][a-z]{2,9}$/.test(nombre.value.trim())) {
        mostrarError(nombre, "El nombre debe tener entre 3 y 10 caracteres alfabéticos, el primero con mayúscula.");
        error = true;
    } else {
        limpiarError(nombre);
    }

    // Validar apellido
    const apellido = document.getElementById("apellido");
    if (!/^[A-Z][a-z]{3,7}$/.test(apellido.value.trim())) {
        mostrarError(apellido, "El apellido debe tener entre 4 y 8 caracteres alfabéticos, el primero con mayúscula.");
        error = true;
    } else {
        limpiarError(apellido);
    }

    // Validar segundo apellido (opcional)
    const apellido2 = document.getElementById("apellido2");
    if (apellido2.value.trim() !== "" && !/^[A-Z][a-z]{3,7}$/.test(apellido2.value.trim())) {
        mostrarError(apellido2, "El segundo apellido debe tener entre 4 y 8 caracteres alfabéticos, el primero con mayúscula.");
        error = true;
    } else {
        limpiarError(apellido2);
    }

    // Validar teléfono
    const telefono = document.getElementById("telefono");
    if (!/^\+\d{2} \d{3}-\d{3}-\d{3}$/.test(telefono.value.trim())) {
        mostrarError(telefono, "El teléfono debe tener el formato +99 999-999-999.");
        error = true;
    } else {
        limpiarError(telefono);
    }

    // Validar email
    const email = document.getElementById("email");
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email.value.trim())) {
        mostrarError(email, "El email no es válido.");
        error = true;
    } else {
        limpiarError(email);
    }

    // Validar dirección
    const direccion = document.getElementById("direccion");
    if (!/^[A-Za-z]{2,20} [0-9]{1,3}$/.test(direccion.value.trim())) {
        mostrarError(direccion, "La dirección debe incluir un nombre y un número (ejemplo: Calle 123).");
        error = true;
    } else {
        limpiarError(direccion);
    }

    // Si no hay errores, enviar formulario
    if (!error) {
        document.getElementById("miFormulario").submit();
    }
});

// Función para mostrar errores (borde rojo y mensaje nativo del navegador)
function mostrarError(input, mensaje) {
    input.style.borderColor = "red";
    input.setCustomValidity(mensaje); // Establecer mensaje personalizado
    input.reportValidity(); // Mostrar mensaje nativo del navegador
}

// Función para limpiar errores (restaurar estilo y mensaje)
function limpiarError(input) {
    input.style.borderColor = "initial";
    input.setCustomValidity(''); // Limpiar mensaje personalizado
}

// Escuchar eventos individuales para limpiar errores mientras se escribe
document.getElementById("nombre").addEventListener("input", function() {
    limpiarError(this);
});
document.getElementById("apellido").addEventListener("input", function() {
    limpiarError(this);
});
document.getElementById("apellido2").addEventListener("input", function() {
    limpiarError(this);
});
document.getElementById("telefono").addEventListener("input", function() {
    limpiarError(this);
});
document.getElementById("email").addEventListener("input", function() {
    limpiarError(this);
});
document.getElementById("direccion").addEventListener("input", function() {
    limpiarError(this);
});


document.getElementById("miFormulario").addEventListener("reset", function() {
    limpiarError(document.getElementById("nombre"));
    limpiarError(document.getElementById("apellido"));
    limpiarError(document.getElementById("apellido2"));
    limpiarError(document.getElementById("telefono"));
    limpiarError(document.getElementById("email"));
    limpiarError(document.getElementById("direccion"));
});