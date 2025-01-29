
        function encriptar() {
            let mensaje = prompt("Introduce el mensaje a encriptar:");
            let clave = prompt("Introduce la clave numérica:");
            let mensajeEncriptado = procesarMensaje(mensaje, clave, true);
            document.getElementById("textoEncriptado").value = mensajeEncriptado;
        }

        function desencriptar() {
            let mensaje = prompt("Introduce el mensaje a desencriptar:");
            let clave = prompt("Introduce la clave numérica:");
            let mensajeDesencriptado = procesarMensaje(mensaje, clave, false);
            document.getElementById("textoEncriptado").value = mensajeDesencriptado;
        }

        function procesarMensaje(mensaje, clave, encriptar) {
            let resultado = "";
            let cont = 0;

            for (let i = 0; i < mensaje.length; i++) {
                let charCode = mensaje.charCodeAt(i);
                
                if (clave.length === cont) {
                    cont = 0;
                }

                let desplazamiento = parseInt(clave.charAt(cont)) * (encriptar ? 1 : -1);
                cont++;
                resultado += String.fromCharCode(charCode + desplazamiento);
            }
            return resultado;
}