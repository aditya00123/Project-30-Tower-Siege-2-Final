class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        this.image = loadImage('block.png');
        World.add(world, this.body);

        console.log(this.visibility);
      }

      

      display(){
        if (this.body.speed < 3) {
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        }
        else {
          World.remove(world,this.body);
          push();
          translate(this.body.position.x,this.body.position.y);
          this.visibility = this.visibility - 5;
          tint(255,this.visibility);
          image(this.image,0,0,this.width,this.height);
          pop();
        }
      }

      score() {
        if (this.visibility < 0 && this.visibility > -55) {
          score = score + 1;
        }
      }
}
