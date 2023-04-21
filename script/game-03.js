canvas_g3 = document.getElementById("game-03");
context_g3 = canvas_g3.getContext("2d");

let window_width_g3 = window.innerWidth;
let window_height_g3 = window.innerHeight;

canvas_g3.width = window_width_g3;
canvas_g3.height = window_height_g3;
canvas_g3.style.background = "#fff"; //roxo rosado: #daf9

class circle_g3{
    constructor(xpos, ypos, radius, color, speed, text, circle_counter){
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
        this.text = text;
        this.circle_counter = circle_counter;
        this.text = this.circle_counter;
        this.speed = speed;
        this.dx = 1 * this.speed;
        this.dy = 1 * this.speed;
    }

    draw(context_g3){
        context_g3.beginPath();

        context_g3.storkeStyle = this.color;
        context_g3.textAlign = "center";
        context_g3.textBaseline = "middle";
        context_g3.font = "30px Arial";
        context_g3.fillText(this.text, this.xpos, this.ypos);


        context_g3.lineWidth = 5;
        context_g3.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
        context_g3.stroke();
        context_g3.closePath();
    }

    onClick(){
        
    }

    update(){
        context_g3.clearRect(0, 0, window_width_g3, window_height_g3);
        this.draw(context_g3);
        this.xpos += this.dx;
        this.ypos += this.dy;
        this.text = this.circle_counter;

        if((this.xpos + this.radius)> window_width_g3){
            this.dx = -this.dx;
            this.circle_counter++;
        } else if((this.ypos + this.radius) > window_height_g3){
            this.dy = -this.dy;
            this.circle_counter++;
        } else if((this.xpos - this.radius) < 0){
            this.dx = -this.dx;
            this.circle_counter++;
        } else if((this.ypos - this.radius) < 0){
            this.dy = -this.dy;
            this.circle_counter++;
        }
    }
}

class player_g3{
    constructor(vida, pnt){
        this.vida = vida;
        this.pnt = pnt;
    }

    pontos(){

    }
}


let my_circle_g3 = new circle_g3(Math.random()*350, Math.random()*350, 40, "black", 5, undefined, 1);
my_circle_g3.draw(context_g3);


let update_circle_g3 = function(){
    requestAnimationFrame(update_circle_g3);
    my_circle_g3.update();
}

update_circle_g3();
