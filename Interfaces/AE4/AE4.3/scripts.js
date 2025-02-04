//Constants
const canvas = document.getElementById("canvas"); 
const ctx = canvas.getContext("2d"); 
const width = canvas.width; 
const height = canvas.height; 
const size = 10;
const speed = 100;

//Colors
const snakeColor = "green";
const appleColor = "red";
const trapColor = "blue";
const scoreColor = "white";

//Direction
const UP = 38;
const DOWN = 40;
const LEFT = 37;
const RIGHT = 39;

//Initial position
let x = width/2;
let y = height/2;

//Movement
let dx = size;
let dy = 0;         

//Variables
let score = 0;
let snake = [];
let apple = {x: 0, y: 0};



//Classes

/*
* Clase segmento
* @param x: number
* @param y: number
* @param size: number
* @param color: string
*
*/
class Segmento{
    constructor(x, y, size, color){
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    /*
    * Dibuja el segmento en el canvas
    * @param context: CanvasRenderingContext2D
    */
    draw(context){
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.size, this.size);
    }
     
}

class Juego{
    constructor(){};
    iniciarJuego(){};
    cambiarDireccion(e){};
    actualizar(){};
    moverSnake(){};
    verificarColisiones(){};
    generarCoordenadaAleatoria(max){};
    generarTrampas(n){}
    reiniciarJuego(){};
}

let pj = new Segmento(x, y, size, snakeColor);
pj.draw(ctx);