//Create variables here
var dog,happyDog,database,foodS,foodStock,firebase;
function preload()
{
  //load images here
  dogImage=loadImage("dogImg.png");
  happyDogImage=loadImage("dogImg1.png")
}

function setup() {
canvas=	createCanvas(500, 500);
dog=createSprite(100,300,30,30)
dog.addImage(dogImage)
dog.scale=0.1
database=firebase.database();
  foodStock=database.ref('Food')
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDogImage);
}





  drawSprites();
  //add styles here
text("Press UP_ARROW key to Feed Drago Milk",250,30);
textSize(20);
fill("white");

text("food:"+foodS,200,250)
textSize(10)
}


function readStock(data){
  foodS=data.val();
}

function writeStock(x){

if(x<=0){
x=0
}else{
x=x-1
}

database.ref('/').update({
Food:x
})



}



















