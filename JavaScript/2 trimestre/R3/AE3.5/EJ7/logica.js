window .onload = function() {

const nivelTexto = document.getElementById("nivel");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

let nivelActual = 1;
const nivelMaximo = 5;

// Función para actualizar el nivel en el DOM
function actualizarNivel() {
  nivelTexto.textContent = `Nivel ${nivelActual}`;
  btnAnterior.disabled = nivelActual === 1;
  btnSiguiente.disabled = nivelActual === nivelMaximo;
}

// Escuchamos el evento click del botón Anterior
btnAnterior.addEventListener("click", () => { // Sirve para retroceder de nivel
  if (nivelActual > 1) {  // Si el nivel actual es mayor a 1
    nivelActual--;  // Disminuimos el nivel actual
    history.pushState({ nivel: nivelActual }, `Nivel ${nivelActual}`, `#nivel${nivelActual}`);  // Añadimos el nivel actual al historial
    actualizarNivel();
  }
});

// Escuchamos el evento click del botón Siguiente
btnSiguiente.addEventListener("click", () => { // Sirve para avanzar de nivel
  if (nivelActual < nivelMaximo) { // Si el nivel actual es menor al nivel máximo
    nivelActual++;  // Aumentamos el nivel actual
    history.pushState({ nivel: nivelActual }, `Nivel ${nivelActual}`, `#nivel${nivelActual}`);  // Añadimos el nivel actual al historial
    actualizarNivel();  // Actualizamos el nivel
  }
});

// Escuchamos el evento popstate para actualizar el nivel cuando se navega hacia atrás o hacia adelante
// Con esto hacemos que al retroceder o avanzar con  las flechas del navegador tambien se guardden los niveles
window.addEventListener("popstate", (event) => {
  if (event.state && event.state.nivel) {
    nivelActual = event.state.nivel;
    actualizarNivel();
  }
});

// Inicializamos el estado en el historial
history.replaceState({ nivel: nivelActual }, `Nivel ${nivelActual}`, `#nivel${nivelActual}`);

}