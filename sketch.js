var car,wall;
var speed,weight;
function setup() {
  createCanvas(1400, 400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  car.shapeColor = "white";
  wall = createSprite(1300,200,60,height / 2);
  wall.shapeColor = 80,80,80;
  car.velocityX = speed;
  }
  
  function draw() {
    background(220);
    if(isTouching(car,wall)){
      car.velocityX = 0;
      car.x = 1250;
      deformation = 0.5 * weight * speed * speed / 22500;
      if(deformation <= 100){
        car.shapeColor = "green";
      }
      else if(deformation > 100 && deformation <= 180){
        car.shapeColor = "yellow";
      }
      else if(deformation > 180){
        car.shapeColor = "red";
      }
    }
    drawSprites();
  }