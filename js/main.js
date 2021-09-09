const main = () =>{
    self.Table = function(width, height){
        this.width = width;
        this.height = height;
        this.playing = false;
        this.game_over = false;
        this.bars = [];
        this.ball = null;
    }

    self.Table.prototype = {
        get elements(){
            let elements = this.bars;
            elements.push(ball);
            return elements;
        }
    }
}


/* const table = document.getElementById('table');
const contxt = table.getContext('2d'); */