document.addEventListener("DOMContentLoaded", function() {
    // Manejo de usuario
    const welcomeMessage = document.getElementById("welcome-message");
    const username = localStorage.getItem("username");

    if (!username) {
        const user = prompt("Por favor, introduce tu nombre de usuario:");
        if (user) {
            localStorage.setItem("username", user);
            welcomeMessage.textContent = `¡Bienvenido ${user}, qué delicatessen deseas probar hoy!`;
        }
    } else {
        welcomeMessage.textContent = `¡Bienvenido de nuevo ${username}!, ¿repetimos?`;
    }

    // Manejo del formulario
    document.getElementById("miFormulario").addEventListener("submit", function(event) {
        event.preventDefault();
        let error = false;

        function validarCampo(input, regex, mensaje) {
            if (!regex.test(input.value.trim())) {
                mostrarError(input, mensaje);
                error = true;
            } else {
                limpiarError(input);
            }
        }

        validarCampo(
            document.getElementById("nombre"),
            /^[A-Z][a-z]{2,9}$/, 
            "El nombre debe comenzar en mayúscula y tener entre 3 y 10 letras."
        );

        validarCampo(
            document.getElementById("telefono"),
            /^\+\d{2} \d{3}-\d{3}-\d{3}$/,
            "Formato correcto: +99 999-999-999."
        );

        if (!error) {
            if (confirm("¿Deseas enviar el pedido?")) {
                almacenarPedido();
                alert("Pedido realizado correctamente.");
            } else {
                alert("El pedido no se ha enviado, pero los datos han sido guardados.");
            }
        }
    });

    function mostrarError(input, mensaje) {
        input.style.borderColor = "red";
        input.setCustomValidity(mensaje);
        input.reportValidity();
    }

    function limpiarError(input) {
        input.style.borderColor = "initial";
        input.setCustomValidity("");
    }

    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", function() {
            limpiarError(this);
        });
    });

    function almacenarPedido() {
        let pedido = JSON.parse(sessionStorage.getItem("pedido")) || { productos: [] };
        pedido.nombre = document.getElementById("nombre").value;
        pedido.telefono = document.getElementById("telefono").value;
        pedido.direccion = document.getElementById("direccion").value;
        sessionStorage.setItem("pedido", JSON.stringify(pedido));
        actualizarResumenPedido();
    }

    function actualizarResumenPedido() {
        const resumen = document.getElementById("pedido-info");
        const pedido = JSON.parse(sessionStorage.getItem("pedido"));

        if (pedido && pedido.nombre) {
            resumen.innerHTML = `Pedido a nombre de ${pedido.nombre}, teléfono: ${pedido.telefono}, dirección: ${pedido.direccion}<br>Productos: ${pedido.productos.length > 0 ? pedido.productos.map(p => `${p.nombre} (x${p.cantidad}) - €${p.precio * p.cantidad}`).join(", ") : "No hay productos en el carrito."}`;
        } else {
            resumen.textContent = "Actualmente no hay datos de contacto.";
        }
    }

    document.querySelectorAll(".buy-button").forEach(button => {
        button.addEventListener("click", function() {
            const productElement = this.closest(".product");
            const nombre = productElement.getAttribute("data-name");
            const precio = parseFloat(productElement.getAttribute("data-price"));
            
            let pedido = JSON.parse(sessionStorage.getItem("pedido")) || { productos: [] };
            let productoExistente = pedido.productos.find(p => p.nombre === nombre);
            
            if (productoExistente) {
                productoExistente.cantidad++;
            } else {
                pedido.productos.push({ nombre, precio, cantidad: 1 });
            }
            
            sessionStorage.setItem("pedido", JSON.stringify(pedido));
            actualizarResumenPedido();
        });
    });

    document.getElementById("clear-order").addEventListener("click", function() {
        sessionStorage.removeItem("pedido");
        actualizarResumenPedido();
    });

    document.getElementById("logout").addEventListener("click", function() {
        localStorage.removeItem("username");
        location.reload();
    });

    actualizarResumenPedido();



    /* Quiero que el botón con id view-order quiero que me lleve hasta el formulario cuando lo pulso*/

    document.getElementById("view-order").addEventListener("click", function() {
        document.getElementById("miFormulario").scrollIntoView();
    });
});
