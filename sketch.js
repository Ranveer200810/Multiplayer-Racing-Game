var database;
var form, playerCnt, player, game;
var gameState = 0;
var car1, car2, car3, car4;
var car1Img, car2Img, car3Img, car4Img, track, ground;

var allPlayers;
var cars = [];

function preload() {

  car1Img = loadImage("car1.png");
  car2Img = loadImage("car2.png");
  car3Img = loadImage("car3.png");
  car4Img = loadImage("car4.png");

  ground = loadImage("ground.png");

  track = loadImage("track.jpg");

}

function setup(){

  database = firebase.database();
  createCanvas(displayWidth + 20, displayHeight + 30);

  game = new Game();
  game.getGameState();
  game.start();

}

function draw(){

  if (playerCnt === 4) {

    game.updateState(1);

  }

  if (gameState === 1) {

    clear();
    game.play();

  }

  if (gameState === 2) {

    game.end();

  }

}
