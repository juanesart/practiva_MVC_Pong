import Board from "./board.js";
import {draw, hit} from "./helpers/helpFunctions.js";

export default class BoardView {
// contructor de clase
    constructor(table, board) {
      this.table = table;
      this.table.width = board.width;
      this.table.height = board.height;
      this.board = board;
      this.ctx = table.getContext("2d");
    }
// manda  a dibujar elemento por elemento
    drawing(){
        let size = this.board.elements.length;
        for (let i = 0; i < size; i++){
            let elementToDraw = this.board.elements[i];
            draw(this.ctx, elementToDraw);
        }
    }
// limpiar tablero
    clean(){
        this.ctx.clearRect(0, 0, this.board.width, this.board.height);
    }

    check_collision (){
        
        let size2 = this.board.paddles.length;
        for (let i = 0; i < size2; i++){
            let paddle = this.board.paddles[i];
            if(hit(paddle, this.board.ball)){            
                this.board.ball.collision(paddle);
            }
        }
    }
    play () {
        if (this.board.playing == true){
            this.clean();
            this.drawing();
            this.check_collision();
            this.board.ball.move();
        }     
    }
}
