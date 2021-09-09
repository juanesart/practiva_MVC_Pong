export function draw (context, element){
    switch(element.kind) {
        case 'rectangle':
            context.fillRect(element.x, element.y, element.width, element.height);
            break;
        case 'circle':
            context.beginPath();
            context.arc(element.x, element.y, element.radius, 0, 8);
            context.fill();
            context.closePath(); 
            break;
    }
}
export function hit (a, b){
    let hit = false;
    if(b.x + b.width >= a.x && b.x < a.x + a.width){
    if(b.y + b.height >= a.y && b.y < a.y + a.height){
            hit = true;
            return hit;
        }
    }
    
    if(b.x <= a.x && b.x + b.width >= a.x + a.width){
        if(b.y <= a.y && b.y + b.height >= a.y + a.height){
            hit = true;
            return hit;
        }
    }
    
    if(a.x <= b.x && a.x + a.width >= b.x + b.width){
        if(a.y <= b.y && a.y + a.height >= b.y + b.height){
            hit = true;
            return hit;
        }
    }
}