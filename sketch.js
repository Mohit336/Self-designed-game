var canvas, backgroundImage;



var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var leaderShip;

var cars, car1, car2, car3, car4,
    car5Img, car6Img, car7Img,
    car8Img, car9Img, car10Img,
    car11Img, car12Img, car13Img, 
    car14Img, car15Img, car16,
    car17;

var backgroundImage;
var trackImg;    
var car1RandomImg;

function preload() {
  backgroundImage = loadImage("images/Background design.jpg")
  trackImg = loadImage("images/track.jpg")
  car1Img = loadImage("images/car1.png");
  car2Img = loadImage("images/car2.png");
  car3Img = loadImage("images/car3.png");
  car4Img = loadImage("images/car4.png");
  car5Img = loadImage("images/car5.jpg");
  car6Img = loadImage("images/car6.jpg");
  car7Img = loadImage("images/car7.jpg");
  car8Img = loadImage("images/car8.jpg");
  car9Img = loadImage("images/car9.jpg");
  car10Img = loadImage("images/car10.jpg");
  

getBackgroundImg();





}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(backgroundImage);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if (gameState == 2) {
    game.end();
  }
}


function getBackgroundImg(){
  var rand = Math.round(random(5,10))
   console.log(rand);
    var car1Random = "images/car" + rand+".jpg"
    console.log(car1Random);
car1RandomImg = loadImage(car1Random);
  
} 



