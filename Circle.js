class Circle {
    constructor(x,y,radius,color,speed,img) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.img = img;
    }

    draw(canvas){
        let pen = canvas.getContext('2d');
        pen.beginPath();
        pen.arc(this.x,this.y,this.radius,0,2*Math.PI);
        pen.fillStyle = this.color;
        pen.fill();
        pen.closePath();
    }

    drawBall(canvas){
        let pen = canvas.getContext('2d');
        pen.drawImage(this.img,this.x,this.y,100,100);

    }

    moveRight(){
        this.x += this.speed;
    }
}
