class Polygon{

    constructor(x,y,sides,radius)
    {
        var options = {

            isStatic : false,
            restitution : 0
        }
        this.x = x;
        this.y = y;
        this.sides = sides;
        this.radius = radius;
        this.body = Bodies.polygon(x,y,sides,radius,options)
        World.add(world,this.body);
        //this.velocity =  Body.setAngularVelocity(this.body, Math.PI/6);
        



    }

    display()
    {

        push();
        
        var angle = this.body.angle;
        var pos =this.body.position;
        fill(0)
        //push();
        //translate(pos.x1,pos.y1,pos.x2,pos.y2,pos.x3,pos.y3 );
        rotate(angle);
 //trianlgeMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        triangle(pos.x,pos.y,pos.x-30,pos.y+60,pos.x+30,pos.y+60)
        //pop()
        //circle(pos.x,pos.y,this.radius,this.radius)
        //triangle(pos.x,pos.y,this.radius-30,this.radius+60,this.radius+30,this.radius+60)
        
    }






















}