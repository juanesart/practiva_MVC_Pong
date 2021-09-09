export default class Board {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.game_over = false;
      this.paddles = [];
      this.ball = null;
      this.playing = false;
    }
  
    get elements() {
      let elements = this.paddles.map(function (paddle) {
        return paddle;
      });
      elements.push(this.ball);
      return elements;
    }
  
    setBall(ball) {
      this.ball = ball;
    }
}