class Drop{
    constructor(x, y, radius) {
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.1,
            'density':1.2
        }
        this.x=x;
        this.y=y;
        //this.image = loadImage("paper.png");
        this.radius=radius;
        this.body = Bodies.circle(this.x,this.y,this.radius,options);
        
        
        World.add(world, this.body);
      }
      update()
      {
        if(this.body.position.y>height)
        {
          Matter.Body.setPosition(this.body, {x:random(0,700), y:random(0,700)});
        }
      }
      display()
      {
        //var maxDrops=100;
        //for(var i=0;i<maxDrops;i++)
       // {
        //     drops.push(new createDrop(random(0,400),random(0,400)));
       // }

        var pos =this.body.position;
        //pos.x=mouseX;
        //pos.y=mouseY;
        push();
        var angle = this.body.angle;
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0,0,this.radius,this.radius);
        pop();
      }  
}
