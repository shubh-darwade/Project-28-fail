class mango
{
    constructor(x,y,radius)
    {
        
        this.body=Bodies.circle(x,y,radius/2,{isStatic:true,restitution:0,friction:0,});
        this.width=radius;
        this.height=radius;
        this.image=loadImage("images/mango.png")
        World.add(world,this.body);
    }
      display()
      {
        var mpos=this.body.position;
          push();
          translate(this.body.position.x,this.body.position.y)
         imageMode(CENTER);
         image(this.image,0,0,this.width,this.height);
           pop();
      }
}