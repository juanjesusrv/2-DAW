// Constantes para las teclas de dirección
const KEY_LEFT = "ArrowLeft";
const KEY_UP = "ArrowUp";
const KEY_RIGHT = "ArrowRight";
const KEY_DOWN = "ArrowDown";

// Clase Segmento para representar un cuadrado en el lienzo
class Segmento {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    dibujar(context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.size, this.size);
    }
}

// Clase Juego para representar el juego de la serpiente

class Juego {
    constructor() {
        this.canvas = document.getElementById('lienzo');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = 600;
        this.canvas.height = 480;
        this.snake = [new Segmento(this.canvas.width / 2, this.canvas.height / 2, 10, '#0f0')];
        this.direccion = null;
        this.direccionAnterior = null;
        this.cuadradoRojo = this.generarCoordenadaAleatoria();
        this.cuadradosAzules = [];
        this.puntuacion = 0;
        this.maxPuntuacion = 10;
        this.velocidad = 10;
        this.frameDelay = 80;
    }

    iniciarJuego() {
        document.addEventListener('keydown', this.cambiarDireccion.bind(this), false);
        this.run();
    }

    cambiarDireccion(event) {
        const key = event.code;
        if ([KEY_LEFT, KEY_UP, KEY_RIGHT, KEY_DOWN].includes(key)) {
            event.preventDefault();
            this.direccionAnterior = this.direccion;
            this.direccion = key;
        }
    }

    run() {
        setTimeout(() => {
            requestAnimationFrame(this.run.bind(this));
            this.actualizar();
            this.pintarLienzo();
        }, this.frameDelay);
    }

    actualizar() {
        this.moverCuadrado();
        this.verificarColisiones();
    }

    moverCuadrado() {
        if (!this.direccion) return;

        let head = { ...this.snake[0] };
        if (this.direccion === KEY_RIGHT && this.direccionAnterior !== KEY_LEFT) head.x += this.velocidad;
        if (this.direccion === KEY_LEFT && this.direccionAnterior !== KEY_RIGHT) head.x -= this.velocidad;
        if (this.direccion === KEY_UP && this.direccionAnterior !== KEY_DOWN) head.y -= this.velocidad;
        if (this.direccion === KEY_DOWN && this.direccionAnterior !== KEY_UP) head.y += this.velocidad;


        this.snake.unshift(new Segmento(head.x, head.y, head.size, head.color));
        this.snake.pop();
    }

    verificarColisiones() {
        let head = this.snake[0];

        // Colisión con bordes
        if (head.x < 0 || head.x >= this.canvas.width || head.y < 0 || head.y >= this.canvas.height) {
            alert('Has perdido :(');
            this.reiniciarJuego();
        }

        // Colisión con cuadrado rojo
        if (head.x === this.cuadradoRojo.x && head.y === this.cuadradoRojo.y) {
            this.snake.push(new Segmento(head.x, head.y, head.size, head.color));
            this.cuadradoRojo = this.generarCoordenadaAleatoria();
            this.generarCuadradosAzules(this.puntuacion + 1);
            this.puntuacion++;
            this.pintarPuntuacion();
            if (this.puntuacion >= this.maxPuntuacion) {
                alert('You are a winner!! :)');
                this.reiniciarJuego();
            }
        }

        // Colisión con cuadrados azules
        for (let azul of this.cuadradosAzules) {
            if (head.x === azul.x && head.y === azul.y) {
                alert('Has perdido :(');
                this.reiniciarJuego();
            }
        }
    }

    generarCoordenadaAleatoria() {
        let x = Math.floor(Math.random() * (this.canvas.width / 10)) * 10;
        let y = Math.floor(Math.random() * (this.canvas.height / 10)) * 10;
        return new Segmento(x, y, 10, '#f00');
    }

    generarCuadradosAzules(n) {
        this.cuadradosAzules = [];
        for (let i = 0; i < n; i++) {
            let azul;
            do {
                azul = this.generarCoordenadaAleatoria();
            } while (this.snake.some(segmento => segmento.x === azul.x && segmento.y === azul.y) ||
                     (this.cuadradoRojo.x === azul.x && this.cuadradoRojo.y === azul.y));
            azul.color = '#61dafb';
            this.cuadradosAzules.push(azul);
        }
    }

    // Reiniciar el juego
    reiniciarJuego() {
        this.snake = [new Segmento(this.canvas.width / 2, this.canvas.height / 2, 10, '#0f0')];
        this.direccion = null;
        this.cuadradoRojo = this.generarCoordenadaAleatoria();
        this.cuadradosAzules = [];
        this.puntuacion = 0;
    }

    // Pintar el lienzo
    pintarLienzo() {
        this.context.fillStyle = "#F7F9FA";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.snake.forEach(segmento => segmento.dibujar(this.context));
        this.cuadradoRojo.dibujar(this.context);
        this.cuadradosAzules.forEach(azul => azul.dibujar(this.context));
    }
}


// Inicialización del juego al cargar la página
window.addEventListener("load", () => {
    const juego = new Juego();
    juego.iniciarJuego();
}, false);