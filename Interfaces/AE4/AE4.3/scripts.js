// Constantes para las teclas de dirección
const KEY_LEFT = "ArrowLeft";
const KEY_UP = "ArrowUp";
const KEY_RIGHT = "ArrowRight";
const KEY_DOWN = "ArrowDown";


// Constantes para los sonidos del juego
const S_BOCADO = "./audio/bocado.mp3";
const S_DIR = "./audio/dir.mp3";
const S_WIN = "./audio/win.mp3";
const S_LOSE = "./audio/lose.mp3";

// Constantes para las imagenes
const I_MANZANA = new Image();
I_MANZANA.src = "./img/manzana.png";

const I_PILAR = new Image();
I_PILAR.src = "./img/pilar.png";

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
        this.snake = [new Segmento(this.canvas.width / 2, this.canvas.height / 2, 20, '#0f0')];
        this.direccion = null;
        this.cuadradoRojo = this.generarCoordenadaAleatoria();
        this.cuadradosAzules = [];
        this.puntuacion = 0;
        this.maxPuntuacion = 10;
        this.velocidad = 20;
        this.frameDelay = 100;
        this.direccionCambiada = false;
    }

    iniciarJuego() {
        document.addEventListener('keydown', this.cambiarDireccion.bind(this), false);
        this.run();
    }

    cambiarDireccion(event) {
        const key = event.code;
    
        if ([KEY_LEFT, KEY_UP, KEY_RIGHT, KEY_DOWN].includes(key)) {
            event.preventDefault();
    
            // Reproducir sonido de dirección
            const audioDir = new Audio(S_DIR);
            audioDir.play();
    
            // No permitir más de un cambio de dirección por frame
            if (this.direccionCambiada) return;
            
            // Evitar cambios de dirección opuestos
            if ((this.direccion === KEY_LEFT && key === KEY_RIGHT) ||
                (this.direccion === KEY_RIGHT && key === KEY_LEFT) ||
                (this.direccion === KEY_UP && key === KEY_DOWN) ||
                (this.direccion === KEY_DOWN && key === KEY_UP)) {
                return;
            }
    
            this.direccion = key;
            this.direccionCambiada = true; // Evita más de un cambio de dirección por frame
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
        this.direccionCambiada = false;
        this.moverCuadrado();
        this.verificarColisiones();
    }

    moverCuadrado() {
        if (!this.direccion) return;

        let head = { ...this.snake[0] };
        if (this.direccion === KEY_RIGHT ) head.x += this.velocidad;
        if (this.direccion === KEY_LEFT ) head.x -= this.velocidad;
        if (this.direccion === KEY_UP ) head.y -= this.velocidad;
        if (this.direccion === KEY_DOWN ) head.y += this.velocidad; 


        this.snake.unshift(new Segmento(head.x, head.y, head.size, head.color)); 
        this.snake.pop();
    }

    verificarColisiones() {
        let head = this.snake[0];
        const audioLose = new Audio(S_LOSE);
        const audioWin = new Audio(S_WIN);
        

        // Colisión con bordes
        if (head.x < 0 || head.x >= this.canvas.width || head.y < 0 || head.y >= this.canvas.height) {
            audioLose.play();
            setTimeout(() => {
                alert('Has perdido :(');
            }, 200); 
            this.reiniciarJuego();
        }

        // Colisión con cuadrado rojo
        if ((head.x === this.cuadradoRojo.x && head.y === this.cuadradoRojo.y ) ||
                head.x === this.cuadradoRojo.x && head.y === this.cuadradoRojo.y) {
            const audioBocado = new Audio(S_BOCADO);
            audioBocado.play();
            
            this.snake.push(new Segmento(head.x - 20000, head.y - 20000, 20, '#0f0'));
            this.cuadradoRojo = this.generarCoordenadaAleatoria();
            this.generarCuadradosAzules(this.puntuacion + 1);
            this.puntuacion++;
            document.getElementById('scoreValue').innerText = this.puntuacion;
            if (this.puntuacion >= this.maxPuntuacion) {


                audioWin.play();
                setTimeout(() => {
                    alert('¡Has ganado!');
                    document.getElementById('scoreValue').innerText = this.puntuacion;
                }, 200);

                this.reiniciarJuego();
            }
        }

        
        // Colisión con cuadrados azules
        for (let azul of this.cuadradosAzules) {
            if (head.x === azul.x && head.y === azul.y) {
                audioLose.play();
                setTimeout(() => {
                    alert('Has perdido :(');
                }, 200); 
                this.reiniciarJuego();
            }
        }

        // Colisión con la serpiente
        for (let i = 1; i < this.snake.length; i++) {
            if (head.x === this.snake[i].x && head.y === this.snake[i].y) {
                audioLose.play();
                setTimeout(() => {
                    alert('Has perdido :(');
                }, 200);
                this.reiniciarJuego();
            }
        }
    }

    generarCoordenadaAleatoria() {

        let x = Math.floor(Math.random() * this.canvas.width / 20) * 20;
        let y = Math.floor(Math.random() * this.canvas.height /20) * 20;

        return new Segmento(x, y, 20, '#f00');
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
        this.snake = [new Segmento(this.canvas.width / 2, this.canvas.height / 2, 20, '#0f0')];
        this.direccion = null;
        this.cuadradoRojo = this.generarCoordenadaAleatoria();
        this.cuadradosAzules = [];
        this.puntuacion = 0;
    }

    // Pintar el lienzo
    pintarLienzo() {
        this.context.fillStyle = "#F7F9FA"; // Color de fondo
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);  // Rellenar el fondo
        this.snake.forEach(segmento => segmento.dibujar(this.context)); // Dibujar la serpiente
        this.context.drawImage(I_MANZANA, this.cuadradoRojo.x, this.cuadradoRojo.y, 20, 20);
        this.cuadradosAzules.forEach(azul => this.context.drawImage(I_PILAR, azul.x, azul.y, 20, 20));
    }
}


// Inicialización del juego al cargar la página
window.addEventListener("load", () => {
    const juego = new Juego();
    juego.iniciarJuego();
}, false);