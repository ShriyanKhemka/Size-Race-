var player,playerImg;
var timer,form,game;
var gameState = 0;
var playerCount = 0;
var database;
var allPlayers;
var player1, player2,players;
function preload(){
  playerImg = loadImage("man.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
 
  
}

function draw() {
  background("black");
  if(playerCount===2){
    game.update(1);
  }
  if(gameState===1){
    game.play();
  }
  
 
  
  
}

