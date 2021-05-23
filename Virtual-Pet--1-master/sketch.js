var dog, happyDog,database, foodS, foodStock;

function preload(){
  dogImg = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png")
}

function setup(){
  database = firebase.database();
  createCanvas(500,500);
  dog = createSprite(250,250,20,20);
  dog.addImage(dogImg);
  dog.scale = 0.1;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}

function draw(){
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  foodS = foodS - 1;
   writeStock(foodS);
   dog.addImage(dogImg2);
}

textSize(15)
text("foodStock : " + foodS,100, 450)
text("Note : pls press the UPARROW key to feed the dog", 80,20);

drawSprites();
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food : x
  })

}
