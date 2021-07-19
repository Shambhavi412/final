class JBody{
    constructor(x,y,width,height,pic,) {
      var options = {
          isStatic: true,
         // density : 1.2,
          //restitution : 0.4,
          //friction : 4
      
        // frictionStatic : this.friction,
         

         
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.pic = pic;
      this.body.velocityX = -2
      //this.friction = friction
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //imageMode(CENTER);
      //fill(this.outline);
      //stroke("white");
      //strokeWeight(10)
      //image(this.pic,pos.x, pos.y, this.width, this.height);
      if(this.pic === eT1)
      {
        rectMode(CENTER);
       stroke("yellow");
       strokeWeight(5);
        fill(0)
        //noFill()
        rect(pos.x, pos.y, this.width, this.height)
        
      }
      if(this.pic === eB1)
      {
        rectMode(CENTER);
        stroke("yellow");
        strokeWeight(5);
        fill("black")
        rect(pos.x, pos.y, this.width, this.height);
/*push();
        for(var i = 0;i<800;i =i+20)
{
  strokeWeight(10)
  line(i,150,i+10,150);
}
pop();*/
}
      
      }
  };
