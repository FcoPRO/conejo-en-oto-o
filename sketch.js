var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var orange,orangeImg;
var red,redImg;
var select_sprites;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// Mover el fondo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//crear sprite de rabbit (conejo)
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=World.mouseX;


  edges= createEdgeSprites();
  rabbit.collide(edges);

  select_sprites=Math.round(random(1,3));
  if (frameCount % 80 == 0){
    if(select_sprites == 1){
      createapple();
    } else if(select_sprites == 2){
      createorange();
    } else if(select_sprites == 3){
      createred();
    }
  }
  drawSprites();
}


function createapple(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.velocityY=3;
  apple.lifetime=150;

}

function createorange(){
  orange = createSprite(random(50, 350), 40, 10, 10);
  orange.addImage(orangeImg);
  orange.scale=0.08;
  orange.velocityY = 3;
  orange.lifetime=150;
}

function createred(){
  red = createSprite(random(50,350),40,10,10);
  red.addImage(redImg);
  red.scale=0.06;
  red.velocityY=3;
  red.lifetime=150;
}
