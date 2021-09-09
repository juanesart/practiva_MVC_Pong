export default class Ball {
    constructor(x, y, radius, board){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.height = radius * 2;
        this.width = radius * 2;
        this.board = board;
        this.speed_y = 0;
        this.speed_x = 3;
        this.bounce_angle = 0;
        this.max_bounce_angle = Math.PI /12;
        this.board.ball = this;
        this.kind = "circle";
        this.speed = 3;
        this.direction = 1;
        this.contadorJugador2 = 0;
        this.contadorJugador1 = 0;
    }

    //Movimiento de pelota y marcación de puntos
    move(){
        if (this.x >= 790 || this.x <= 10){
            this.direction = this.direction * -1;
        }
        if (this.y <= 10 || this.y >= 390) {
            this.speed_y = this.speed_y * - 1;
        }
        if (this.x >= 790){
            this.contadorJugador1++;
            //Modificar puntaje P1.
            document.getElementById("p1").innerHTML = this.contadorJugador1;

            this.x = 390;
            this.y = 240 ;
            this.direction = 1;
            this.speed_y = 0;
            this.speed_x = 3;
            this.speed = 3;
            this.board.playing = false;
            if (this.contadorJugador1 == 5) {
                alert('El jugador 1 ha ganado');
                window.location.reload();
            }
            
        }else if (this.x <= 10) {
            this.contadorJugador2++;
            //Modificar puntaje P2.
            document.getElementById("p2").innerHTML = this.contadorJugador2;


            this.x = 390;
            this.y = 240 ;
            this.direction = -1;
            this.speed_y = 0;
            this.speed_x = 3;
            this.speed = 3;
            this.board.playing = false;
            if (this.contadorJugador2 == 5) {
                alert('El jugador 2 ha ganado');
                window.location.reload();
            }
        }

        this.x = this.x + (this.speed_x * this.direction);
        this.y = this.y + (this.speed_y * this.direction);
    }


    collision (paddle) {
        let relative_intersect_y = (paddle.y + (paddle.height / 2)) - this.y;
        let normalized_intersect_y = relative_intersect_y / (paddle.height / 2);
        this.bounce_angle = normalized_intersect_y * this.max_bounce_angle;        
        this.speed_y = this.speed * -Math.sin(this.bounce_angle);
        this.speed_x = this.speed * Math.cos(this.bounce_angle);
        this.speed = this.speed + 0.6;

        this.direction = this.direction * -1;
    }
}