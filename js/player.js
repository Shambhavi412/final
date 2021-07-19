class Player{
    constructor() {
      //x,y,width,height
      var options = {
          isStatic: false,
          
         density : 1.2,
          //restitution : 0.4,
          friction : 4,
          restitution : 0
      
         // frictionStatic : 0,
         
         
      }
      //this.x = x
      //this.body = Bodies.rectangle(x,y,width,height,options);
      this.sprite = createSprite(150,300,60,60);
      //this.width = width;
      //this.height = height;

      //this.pic = pic;
      //World.add(world, this.body);
    }
    /*display(){
      var pos =this.body.position;
      rectMode(CENTER);
      //fill(this.outline);
      //stroke("white");
      //strokeWeight(10)
      rect(pos.x, pos.y, this.width, this.height);
    
    }*/


    
  };
