function main(){
    let canvas = document.getElementById("game-01");
    let context = canvas.getContext("2d");

    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;

    canvas.width = windowWidth;
    canvas.height = windowHeight;
    canvas.style.background = "#ff8";

    class circle{
        constructor(xpos, ypos, radius, color){
            this.xpos = xpos;
            this.ypos = ypos;
            this.radius = radius;
            this.color = color;
        }

        draw(context){
            context.beginPath();
            context.lineWidth = 5;
            context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
            context.stroke();
            context.closePath();
        }
    }

    let allCircles = [];

    let createCircle = function(circle){
        circle.draw(context);
    }

    for(var numbers = 0; numbers < 10; numbers++){
        myCircle = new circle((100 * numbers), (100 * numbers), 50, "black");
        allCircles.push(myCircle);
        createCircle(allCircles[numbers]);
    }

}

main();