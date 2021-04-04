var ball;
var database, position;
var balloonImage1,balloonImage2;
function preload(){
  bg =loadImage("cityImage.png");
  balloonImage1=loadAnimation("hotairballoon1.png");
  balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
  "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
  "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
 }
function setup() {
    database = firebase.database()
    createCanvas(500, 500);
    
  ball=createSprite(250,450,150,150);
  ball.addAnimation("hotAirBalloon",balloonImage1);
  ball.scale=0.5;
  textSize(20); 
    var ballposition = database.ref("ball/position");
    ballposition.on("value", readposition,showerror);
}

function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    ball.addAnimation("hotAirBalloon",balloonImage2);
    ball.x=ball.x-10;
   
  }
  else if(keyDown(RIGHT_ARROW)){
    ball.addAnimation("hotAirBalloon",balloonImage2);
   ball.x=ball.x+10
  }
  else if(keyDown(UP_ARROW)){
    ball.addAnimation("hotAirBalloon",balloonImage2);
    ball.y=ball.y-10
  }
  else if(keyDown(DOWN_ARROW)){
    ball.addAnimation("hotAirBalloon",balloonImage2);
    ball.y=ball.y+10
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}


function writePosition(x, y) {
    database.ref("ball/position").set(
        {

            "x": position.x + x,
            "y": position.y + y,

        }
    )
}
function readposition(data) {
position = data.val();
ball.x=position.x
ball.y=position.y
 

}
function showerror(){
console.log("error in writing the database");

}









