var Thing1
var Thing22

function setup() {
  createCanvas(800,400);
 Thing1 = createSprite(300,200,50,50);
 Thing22 = createSprite(400,200,50,100)
 Thing1.shapeColor = 'green'
 Thing22.shapeColor = 'green'
}

function draw() {
  background(255,255,255);  
  drawSprites();
 Thing22.x = mouseX
 Thing22.y = mouseY
if (Thing22.x-Thing1.x<=Thing22.width/2+Thing1.width/2&&
  Thing1.x-Thing22.x<=Thing22.width/2+Thing1.width/2&&
  Thing22.y-Thing1.y<=Thing22.height/2+Thing1.height/2&&
  Thing1.y-Thing22.y<=Thing22.height/2+Thing1.height/2) {
Thing22.shapeColor = 'red'
Thing1.shapeColor = 'red'
}
else {
Thing22.shapeColor = 'green'
Thing1.shapeColor = 'green'
}
}