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
    clear(){
        this.ctx.clearRect(0, 0, this.board.width, this.board.height);
    }
    play () {
        if (this.board.arePlaying == true){
            this.clean();
            this.drawing();
            /* this.check_collition();
            this.board.ball.move(); */
        }     
    }
}
