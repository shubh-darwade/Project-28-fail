class stone
{
    constructor(x,y,radius)
    {
        this.body=Bodies.circle(x,y,radius/2,{isStatic:false,restitution:0,friction:0,});
        this.width=radius;
        this.height=radius;
        this.image=loadImage("images/stone.png")
        World.add(world,this.body);
    }
      display()
      {
          var spos=this.body.position;
         imageMode(CENTER);
         image(this.image,spos.x,spos.y,this.width,this.height);

      }
}