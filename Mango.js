class Mango{
    constructor(x, y,width,height) {
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':1,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 20;
        this.height = 20;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
      }
}