class BoardView {
    constructor() {
      this.canvas = canvas;
      this.canvas.width = board.width;
      this.canvas.height = board.height;
      this.board = board;
      this.ctx = canvas.getContext("2d");
    }
}