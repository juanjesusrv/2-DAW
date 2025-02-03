//Constants
const canvas = document.getElementById("canvas");


//Classes

/*
* Clase segmento
* @param x: number
* @param y: number
* @param size: number
* @param color: string
*
*/
class segmento{
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

let pj = new segmento(0, 0, 10, "green");

pj.draw(canvas.getContext("2d"));

