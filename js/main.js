import BoardView from "./boardView.js";
import Board from "./board.js";
import Paddle from "./paddle.js"
import Ball from "./ball.js";

let board = new Board(800, 500);
let paddle = new Paddle(10, 200, 20, 100, board);
let paddle2= new Paddle(770, 200, 20, 100, board);
let ball = new Ball(390, 240, 10, board);
const table = document.getElementById('table');
let board_view = new BoardView(table, board);

window.addEventListener('load', main);

document.addEventListener("keydown", (event) => { 
    if (event.keyCode == 38){
        event.preventDefault();
        paddle2.up();
    } else if (event.keyCode === 40){
        event.preventDefault();
        paddle2.down();
    }else if (event.keyCode === 87){
        event.preventDefault();
        paddle.up();
    }else if (event.keyCode === 83){
        event.preventDefault();
        paddle.down();
    }else if(event.keyCode === 32){
        event.preventDefault();
        board.playing = !board.playing; 
    }
    console.log(event.keyCode);
})
window.requestAnimationFrame(main);
board_view.drawing();

function main(){
    board_view.play();
    window.requestAnimationFrame(main);
}