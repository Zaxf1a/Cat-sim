var cat 
var car
var bike
var road , roadimg

function prealod(){
  roadimg = loadImage("road.png")
}

function setup() {
  createCanvas(4000,4000)
  road = createSprite(400,400)
  road.addImage(roadimg)
  roadimg.scale = 0.4

}

function draw() {
  background(48,96,147); 
  

 
  
  drawSprites();
}