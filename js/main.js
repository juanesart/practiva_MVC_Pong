import BoardView from "./boardView.js";
import Board from "./board.js";
import Paddle from "./paddle.js"

let board = new Board(800, 500);
let paddle = new Paddle();
let paddle2= new Paddle();
const table = document.getElementById('table');
let board_view = new BoardView(table, board);

window.addEventListener('load', main);

function main(){
    console.log(board.width);
    board_view.play();
}



/* const table = document.getElementById('table');
const contxt = table.getContext('2d'); */