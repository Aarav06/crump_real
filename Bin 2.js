class Bin{
    constructor(x, y) {
        this.image=loadImage("dustbingreen.png");
        this.x=x;
        this.y=y;
        this.width = 200
        this.height = 100
        this.thickness = 20;
        this.angle=0;
        this.bottombody = Bodies.rectangle(this.x, this.y, this.width, this.thickness,{isStatic:true});
        World.add(world, this.bottombody);

        this.leftbody = Bodies.rectangle(this.x,this.y,this.height,this.thickness,{isStatic:true});
        Matter.Body.setAngle(this.leftbody,this.angle);
        World.add(world,this.leftbody);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.bottombody.position.x, this.bottombody.position.y,this.r, this.r);
        //scale(0.4);
        push();
        translate(this.bottombody.position.x, this.bottombody.position.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill("white");
        rect(0,0,this.width,this.thickness);
        pop();

        // push();
        // translate(this.leftbody.position.x, this.leftbody.position.y);
        // rectMode(CENTER);
        // angleMode(RADIANS);
        // fill("white");
        // rotate(this.angle)
        // //rotate(-1*this.angle);
        // rect(0,0,this.thickness,this.height);
        // pop();
      }
}