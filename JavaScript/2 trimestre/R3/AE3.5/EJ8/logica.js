window .onload = function() {

  const nivelTexto = document.getElementById("nivel");
  const btnAnterior = document.getElementById("btnAnterior");
  const btnSiguiente = document.getElementById("btnSiguiente");
  const jugar = document.getElementById("jugar");
  
  let nivelActual = 1;
  const nivelMaximo = 5;
  
  function actualizarNivel() {
    nivelTexto.textContent = `Nivel ${nivelActual}`;
    btnAnterior.disabled = nivelActual === 1;
    btnSiguiente.disabled = nivelActual === nivelMaximo;
  }

  function actualizarImagen(){
    const imagen = document.getElementById("imagen");
    const urls = [
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/Minesweeper_1.svg",
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Minesweeper_2.svg",
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Minesweeper_3.svg",
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Minesweeper_4.svg",
      "https://upload.wikimedia.org/wikipedia/commons/4/46/Minesweeper_5.svg"
    ];

    imagen.src = urls[nivelActual - 1];

  }

  function actualizarJugar(){
    const botonJugar = document.getElementById("jugar");
    botonJugar.textContent = nivelActual === nivelMaximo ? "Jugar al nivel 5" : `Jugar al nivel ${nivelActual}`;
  }

  function actualizarTodo(){
    actualizarNivel();
    actualizarImagen();
    actualizarJugar();
  }

  function retrocederNivel(){
    if (nivelActual > 1) {
      nivelActual--;
      history.pushState({ nivel: nivelActual }, `Nivel ${nivelActual}`, `#nivel${nivelActual}`); 
      actualizarTodo();
    }
  }
  
  btnAnterior.addEventListener("click", retrocederNivel);

  function avanzarNivel(){
    if (nivelActual < nivelMaximo) {
      nivelActual++;
      history.pushState({ nivel: nivelActual }, `Nivel ${nivelActual}`, `#nivel${nivelActual}`);
      actualizarTodo();
    }
  }

  btnSiguiente.addEventListener("click", avanzarNivel);
  
  // Escuchamos el evento popstate para actualizar el nivel cuando se navega hacia atrás o hacia adelante
  // Con esto hacemos que al retroceder o avanzar con  las flechas del navegador tambien se guarden los niveles
  window.addEventListener("popstate", (event) => { 
    if (event.state && event.state.nivel) { // Comprobamos que el estado tenga un nivel
      nivelActual = event.state.nivel; // Actualizamos el nivel actual
      actualizarNivel(); // Actualizamos el texto del nivel
    }
  });

  function abrirVentana(){
    const ventana = window.open("./pop.html", "", "width=500,height=500");
  
    // Espera a que la ventana pop-up se haya cargado antes de realizar la acción
    ventana.onload = function() {
      // Obtiene el nivel guardado desde el historial o la página
      let nivelActual = 1; // Valor por defecto en caso de que no haya nivel en el historial
  
      // Intenta leer el nivel del historial o el valor guardado
      if (history.state && history.state.nivel) {
        nivelActual = history.state.nivel;
      }
  
      // Llama a la función para dibujar el tablero con el tamaño 'nivelActual x nivelActual'
      dibujarTablero(ventana, nivelActual);
      
    };
  }
  
  // Función para dibujar el tablero
  function dibujarTablero(ventana, nivel) {
    const tablero = ventana.document.getElementById("tablero");
    
    // Limpia el contenido del tablero
    tablero.innerHTML = "";
  
    // Crea el tablero en base al nivel
    for (let i = 0; i < nivel; i++) {
      const fila = ventana.document.createElement("div");
      fila.style.display = "flex";
      fila.style.marginBottom = "5px";
      
      for (let j = 0; j < nivel; j++) {
        const celda = ventana.document.createElement("div");
        celda.style.width = "30px";
        celda.style.height = "30px";
        celda.style.border = "1px solid #000";
        celda.style.textAlign = "center";
        celda.style.lineHeight = "30px";
        celda.textContent = "X";
        fila.appendChild(celda);
      }
      
      tablero.appendChild(fila);
    }

    
  }

  jugar.addEventListener("click", abrirVentana);

  
  }

  

  
  

  
