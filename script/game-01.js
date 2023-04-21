let canvas2 = document.getElementById("game-02");
let context2 = canvas2.getContext("2d");

var windowWidth2 = window.innerWidth;
var windowHeight2 = window.innerHeight;

canvas2.width = windowWidth2;
canvas2.height = windowHeight2;
canvas2.style.background = "#abc8";

class circle2{
    constructor(xpos, ypos, radius, color, text, speed){
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
        this.text = text;
        this.speed = speed;

        this.dx = 1 * this.speed;
        this.dy = 1 * this.speed;
    }

    draw(context2){
        context2.beginPath();

        context2.strokeStyle = this.color;
        context2.textAlign = "center";
        context2.textBaseline = "middle";
        context2.font = "30px Arial";
        context2.fillText(this.text, this.xpos, this.ypos);

        context2.lineWidth = 5;
        context2.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
        context2.stroke();
        context2.closePath();
    }

    update(){
        this.draw(context);
        this.xpos += this.dx;
        this.ypos += this.dy;
    }
}

let circleCounter = 1;
let random_x = Math.random() * windowWidth2;
let random_y = Math.random() * windowHeight2;

let myCircle2 = new circle2(random_x, random_y, 80, "black", circleCounter, 1);

myCircle2.draw(context2);

let updateCircle = function(){
    requestAnimationFrame(updateCircle);
    myCircle2.update();
}

updateCircle();

/*
for(var i = 0; i < 1; i++){

    let random_x = Math.random() * windowWidth2;
    let random_y = Math.random() * windowWidth2;

    myCircle2 = new circle2(random_x, random_y, 80, "black", circleCounter, 1);
    allCircles2.push(myCircle2);
    createCircle2(allCircles2[i]);
    circleCounter++;
}
*/