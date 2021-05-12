var hypnoticBall, database;
var position;
var playerCount;
var gameState = 0;
var form,game,player;


function setup(){
  database = firebase.database();
  createCanvas(500,500);

game = new Game();
game.getState();
game.start();
}

function draw(){
  
}
