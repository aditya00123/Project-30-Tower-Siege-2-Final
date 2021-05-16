class Polygon {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.radius = 30;

        var options = {
            restitution:0.2,
            friction:0.5,
            density:1.2,
        }

        this.image = loadImage('polygon.png');

       this.body = Bodies.circle(x,y,30,options);
       World.add(world,this.body);

       

    }

    display() {
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image,0,0,60,60);
    pop()
    }
}