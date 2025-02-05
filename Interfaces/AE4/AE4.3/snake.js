//Constantes 
const KEY_LEFT = "ArrowLeft";
const KEY_UP = "ArrowUp";
const KEY_RIGHT = "ArrowRight";
const KEY_DOWN = "ArrowDown";
const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');

//Variables
let x=null,y=null;
let lastPress=null;

//posición inicial del personaje
x = canvas.width / 2;
y = canvas.height / 2;

//Clases

class Segmento{
    constructor(x,y,size,color){
        this.x=x;
        this.y=y;
        this.size=size;
        this.color=color;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

class Juego{
    constructor(){
        this.segmentos = [];
        this.segmentos.push(new Segmento(x,y,10,'#0f0'));
    }

//Eventos
document.addEventListener('keydown', function(event) {
    lastPress=event.code;
}, false);
window.addEventListener("load", iniciar, false);