





const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var eB1, eT1, b;
var b1, t1, b2, t2, b3, t3, b4, t4, b5, t5, t6, b6;

var t7,t8,t9,t10,t11;

var t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30;

var b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30;

var t31, t32, t33, t34, t35, t36, t37, t38, t39, t40;

var b31, b32, b33, b34, b35, b36, b37, b38, b39, b40;

var b41, b42, b43, b44, b45, b46, b47, b48, b49, b50, b51, b52, b53, b54, b55, b56, b57, b58, b59, b60

var t41, t42, t43, t44, t45, t46, t47, t48, t49, t50, t51, t52, t53, t54, t55, t56, t57, t58, t59, t60;
var ground;

var player;
var plr;

var exp;

var Xp;

var bg;
var t;

var shps;

var angle = 0;

var ob1;

var d;

var gravity;

var r;

var d, d1, d2;

var hit = false;
var hit2 = false;
var hit3 = false;
var hit4 = false;
var hit5 = false;
var hit6 = false;
var hit7  = false;
var hit8 = false;
var hit9 = false;
var hit10 = false;


function preload() {
  eT1 = loadImage('images/eT1.jpg');
  eB1 = loadImage('images/y.jpg')
  b = loadImage('images/3.jpg');
  bg = loadImage('images/bbb.png');
  
    }



function setup(){
    var canvas = createCanvas(displayWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    /*engine = Engine.create(document.body, {
      world: {
        gravity: { x:0, y:0.17 }
      }
    }*/
    
    b1 = new JBody(150,windowHeight-250,60,220,eB1);
    t1 = new JBody(150,360,60,60,eT1);

     b2 = new JBody(380,windowHeight-258,60,260,eB1);
     t2 = new JBody(380,360,60,60,eT1);
   
     b3 = new JBody(610,530,60,180,eB1);
     t3 = new JBody(610,380,60,60,eT1);
   
     b4 = new JBody(840,550,60,140,eB1);
     t4 = new JBody(840,420,60,60,eT1);
   
     b5 = new JBody(1070,570,60,100,eB1);
     t5 = new JBody(1070,530,60,60,eT1);

   //because there won't be a bottom block for ->
    t6 = new JBody(1300,585,60,60,eT1);
  
    b6 = new JBody(1530,570,60,100,eB1);
    t7 = new JBody(1530,530,60,60,eT1);


    t8 = new JBody(1760,490,60,60,eT1);
    t9 = new JBody(1820+3,490,60,60,eT1);
    t10 = new JBody(1880+6,490,60,60,eT1);
    t11 = new JBody(1940+9,490,60,60,eT1);

    t12 = new JBody(2179,585,60,60,eT1);
  
    b7 = new JBody(2409,525,60,60,eB1);
    b8 = new JBody(2469+1,525,60,60,eB1);
    b9 = new JBody(2529+2,525,60,60,eB1);
    b10 = new JBody(2589+3,525,60,60,eB1);
    b11 = new JBody(2649+4,525,60,60,eB1);
    b12 = new JBody(2709+5,525,60,60,eB1);
    b13 = new JBody(2769+6,525,60,60,eB1);
    b14 = new JBody(2829+7,525,60,60,eB1);
    b15 = new JBody(2889+8,525,60,60,eB1);
    b16 = new JBody(2949+9,525,60,60,eB1);
    b17 = new JBody(3009+10,525,60,60,eB1);

    t13 = new JBody(3250,585,60,60,eT1);
  
    t14 = new JBody(3480,420,60,60,eT1);
   
    t15 = new JBody(3710,420,60,60,eT1);
    b18 = new JBody(3710,540,60,180,eB1);
     
    t16 = new JBody(3940,420,60,60,eT1);
    b19 = new JBody(3940,540,60,180,eB1);

    t17 = new JBody(4170,585,60,60,eT1);
  
    t18 = new JBody(4400,450,60,60,eT1);

    t19 = new JBody(4630,520,60,60,eT1);

    t20 = new JBody(4860,420,60,60,eT1);
   
    b20 = new JBody(5090,windowHeight-253,60,260,eB1);
    t21 = new JBody(5090,340,60,60,eT1);

    t22 = new JBody(5320,380,60,60,eT1);
   
    t23 = new JBody(5550,420,60,60,eT1);
    t24 = new JBody(5610+1,420,60,60,eT1);
    t25 = new JBody(5670+2,420,60,60,eT1);
    t26 = new JBody(5730+3,420,60,60,eT1);
   
    b21 = new JBody(5963,420,60,390,eB1);
    b22 = new JBody(6023+5,420,60,390,eB1);
    b23 = new JBody(6083+10,420,60,390,eB1);
    b24 = new JBody(6143+15,420,60,390,eB1);
    
    b25 = new JBody(6388,490,60,250,eB1);
    t27 = new JBody(6388,335,60,60,eT1);
    b26 = new JBody(6448+5,490,60,250,eB1);
    t28 = new JBody(6448+5,335,60,60,eT1);
    b27 = new JBody(6508+10,490,60,250,eB1);
    t29 = new JBody(6508+10,335,60,60,eT1);
    b28 = new JBody(6568+15,490,60,250,eB1);
    t30 = new JBody(6568+15,335,60,60,eT1);
    
    b29 = new JBody(6813,500,60,230,eB1);
    b30 = new JBody(6873+5,500,60,230,eB1);
    b31 = new JBody(6933+10,500,60,230,eB1);
    b32 = new JBody(6993+15,500,60,230,eB1);
    
    b33 = new JBody(7238,460,60,310,eB1);
    t31 = new JBody(7238,275,60,60,eT1);
    b34 = new JBody(7298+5,460,60,310,eB1);
    t32 = new JBody(7298+5,275,60,60,eT1);
    b35 = new JBody(7358+10,460,60,310,eB1);
    t33 = new JBody(7358+10,275,60,60,eT1);

    b36 = new JBody(7598,500,60,230,eB1);
    b37 = new JBody(7658+5,500,60,230,eB1);
    b38 = new JBody(7718+10,500,60,230,eB1);
    b39 = new JBody(7778+15,500,60,230,eB1);
    b40 = new JBody(7838+20,500,60,230,eB1);
    b41 = new JBody(7898+25,500,60,230,eB1);
    //
    b42 = new JBody(8153,460,60,310,eB1);
    t34 = new JBody(8153,275,60,60,eT1);
    b43 = new JBody(8213+5,460,60,310,eB1);
    t35 = new JBody(8213+5,275,60,60,eT1);
    b44 = new JBody(8273+10,460,60,310,eB1);
    t36 = new JBody(8273+10,275,60,60,eT1);

    t37 = new JBody(8513,310,60,60,eT1);
  
    t38 = new JBody(8743,370,60,60,eT1);
  
    t39 = new JBody(8973,430,60,60,eT1);
  
    b45 = new JBody(9203,585,60,60,eB1);
  
    t40 = new JBody(9433,430,60,60,eT1);
    t41 = new JBody(9493+3,430,60,60,eT1);
  
    t42 = new JBody(9726,585,60,60,eT1);
    b46 = new JBody(9786+3,585,60,60,eB1);
    t43 = new JBody(9846+6,585,60,60,eT1);
  
    b47 = new JBody(10082,570,60,100,eB1);
    t44 = new JBody(10082,530,60,60,eT1);

    b48 = new JBody(10312,550,60,140,eB1);
    t45 = new JBody(10312,490,60,60,eT1);
   
    b49 = new JBody(10542,530,60,180,eB1);
    t46 = new JBody(10542,420,60,60,eT1);

    b50 = new JBody(10772,490,60,250,eB1);
    t47 = new JBody(10772,335,60,60,eT1);

    b51 = new JBody(11002,440,60,350,eB1);
    t48 = new JBody(11002,240,60,60,eT1);

    b52 = new JBody(11232,390,60,450,eB1);
    t49 = new JBody(11232,135,60,60,eT1);

        b53 = new JBody(11462,375,60,480,eB1);
         t50 = new JBody(11462,105,60,60,eT1);

   b54 = new JBody(11692,390,60,450,eB1);
  t51 = new JBody(11692,135,60,60,eT1);

  b55 = new JBody(11922,440,60,350,eB1);
  t52 = new JBody(11922,240,60,60,eT1);

  b56 = new JBody(12152,490,60,250,eB1);
  t53 = new JBody(12152,335,60,60,eT1);

  b57 = new JBody(12382,530,60,180,eB1);
  t54 = new JBody(12382,420,60,60,eT1);

  b58 = new JBody(12612,550,60,140,eB1);
  t55 = new JBody(12612,490,60,60,eT1);
   
  b59 = new JBody(12842,570,60,100,eB1);
  t56 = new JBody(12842,530,60,60,eT1);

  t57 = new JBody(13072,490,60,60,eT1);
  
  t58 = new JBody(13302,550,60,60,eT1);
  b60 = new JBody(13362+3,550,60,60,eB1);
  
  t59 = new JBody(13595,450,60,60,eT1);
  
  b61 = new JBody(13825,380,60,60,eB1);
  
  t60 = new JBody(14005,450,60,60,eT1);
  
  b62 = new JBody(14285,490,60,250,eB1);
  t61 = new JBody(14285,335,60,60,eT1);
  t62 = new JBody(14345+5,335,60,60,eT1);
  b63 = new JBody(14345+5,490,60,250,eB1); 
   

    
    //b3 = new JBody(150,b2.body.position.y-69,60,60,'lightblue')
    ground = new JBody(displayWidth/2,625,displayWidth*20,20,eT1);
   
    //ellipseMode(RADIUS);
    player = createSprite(150,300,40,40);
   player.shapeColor = "pink";
    //player = new Player();
    
    exp = createSprite(100,0,200,100);
  // exp.velocityX = 7;
   exp.shapeColor = "white"
   exp.visible = true;

  
fill(255)


angleMode(DEGREES);

   Engine.update(engine);
}



function draw(){
  background(b);
  hit = collideRectRect(150, 370, 60, 60, player.x, player.y, 50, 75);

  hit2 = collideRectRect(380, 370, 60, 60, player.x, player.y, 50, 75);

hit3 = collideRectRect(610, 390, 60, 60, player.x, player.y, 50, 75);

hit4 = collideRectRect(840, 430, 60, 60, player.x, player.y, 50, 75);

hit5 = collideRectRect(1070, 540, 60, 60, player.x, player.y, 50, 75);

hit6 = collideRectRect(1300, 595, 60, 60, player.x, player.y, 50, 75);

hit7 = collideRectRect(1530, 540, 60, 60, player.x, player.y, 50, 75);

hit8 = collideRectRect(1760, 500, 60, 60, player.x, player.y, 50, 75);

hit9 = collideRectRect(1820 + 3, 500, 60, 60, player.x, player.y, 50, 75);

hit10 = collideRectRect(1880 + 6, 500, 60, 60, player.x, player.y, 50, 75);



  //console.log(player.x,player.y);


bounceTower()
if(hit === true || hit2 === true || hit3 === true || hit4 === true || hit5 === true || hit6 === true || hit7 === true || hit8 === true || hit9 === true || hit10 === true)
{
  player.shapeColor = "red";
t1.body.shapeColor = "red";
    console.log('colliding?', hit);

    //player.collide(t1.body);
    player.velocityY=0;
    player.velocityX=0;
if(keyIsDown(32)) 
{
  bounceTower();
    
}
     


    
}


  b1.display();
  t1.display();


  b2.display();
  t2.display();

  b3.display();
  t3.display();

  b4.display();
  t4.display();

  b5.display();
  t5.display();

  t6.display();

  ground.display();

  b6.display();
  t7.display();

  t8.display();
  t9.display();
  t10.display();
  t11.display();

  t12.display();

  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();

  t13.display();

  t14.display();

  t15.display();
  b18.display();

  t16.display();
  b19.display();

  t17.display();
  
  t18.display();
  t19.display();
  t20.display();
  
  t21.display();
  b20.display();

  t22.display();
  
  t23.display();
  t24.display();
  t25.display();
  t26.display();
  
  b21.display();
  b22.display();
  b23.display();
  b24.display();

  b25.display();
  t27.display();
  b26.display();
  t28.display();
  b27.display();
  t29.display();
  b28.display();
  t30.display();
  
  b29.display();
  //t31.display();
  b30.display();
  //t32.display();
  b31.display();
  //t33.display();
  b32.display();
  //t34.display();
  
  b33.display();
  t31.display();
  b34.display();
  t32.display();
  b35.display();
  t33.display();

  b41.display();
  b36.display();
  b37.display();
  b38.display();
  b39.display();
  b40.display();
 
  b42.display();
  b43.display();
  b44.display();
  t34.display();
  t35.display();
  t36.display();

  t37.display();

  t38.display();

  t39.display();

  b45.display();
  
  t40.display();
  t41.display();

  t42.display();
  b46.display();
  t43.display();

  b47.display();
  t44.display();

  b48.display();
  t45.display();

  b49.display();
  t46.display();

  b50.display();
  t47.display();

  b51.display();
  t48.display();

  b52.display();
  t49.display();

  b53.display();
  t50.display();

  b54.display();
  t51.display();

  b55.display();
  t52.display();

  b56.display();
  t53.display();

  b57.display();
  t54.display();

  b58.display();
  t55.display();

  b59.display();
  t56.display();

  t57.display();

  t58.display();
  b60.display();

  t59.display();
  
  b61.display();

  t60.display();

  b62.display();
  t61.display();
  t62.display();
  b63.display();

  camera.position.x = exp.x;
  //console.log(player.y)
 
  
creatingObstacles();

  drawSprites();
}

function bounceTower()
{
    if(keyIsDown(32) ){
        player.velocityX=5;
        player.velocityY=-5;
    
    }
      else{
        player.velocityY= player.velocityY+0.8;
    }
}








/*function keyPressed() {
  if (keyCode === UP_ARROW) {
    player.velocityY = -2
   // player.velocityY = pl
  }
  else(player.velocityY = player.velocityY + 0.8)
  }*/
  

/*
preload - 53;

// setup - 63;

//creation of jbodies start at 74 and end at 257;

//player - 262;

//exp = 266

//hit - 284

calling bounceTower - 286;

conditions incase hit is true starts at - 287 and ends at 302;

display of j bodies starts at 303 and ends at 483;

camera - 485;

console- y - 486

calling creatingObstacles - 489

drawSprites - 491;

defining BounceTower - 504;

*/
