import Board from "./board.js";
import BoardView from "./boardView.js";

export default class Paddle {
    // contructor de clase
    constructor(x, y, width, height, board){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.board = board;
        this.kind = "rectangle";
        this.board.paddles.push(this);
        this.speed = 15;
    }
    //movimiento
    down() { 
        if(this.y < 400){
            this.y = this.y + this.speed;
        }   
    };
    up () {
        //minimo valor 0
        if (this.y > 0){
            this.y = this.y - this.speed;
        }   
    };
}