//Create variables here
var dog, happyDog, foodS, foodStock, database

function preload(){ 
  dogImg=loadImage("dogImg.png"); 
  dogImg1=loadImage("dogImg1.png"); 
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250, 250, 20, 20)
  dog.addImage(dogImg);
  dog.scale=0.3;
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

 
}


function draw() {  
background(46, 139, 87)
if(keyWentDown(UP_ARROW)){
  writeStoke(foodS);
  dog.addImage(dogImg1);
}
  drawSprites();
  //add styles here
textSize(18)
fill('black')
stroke(4)
text('NOTE : press up arrow key to feed dargo milk', 80, 40)
text ('food remaining : '+ foodS, 10, 140)
}

function readStock(data) {
  foodS = data.val();
}
function writeStoke(x){
  if(x<=20 && x>0){
    x=x-1
  }
  else {
    x=0;
  }
  database.ref('/').update({
    Food:x
  })
}



