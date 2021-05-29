var database;
var form, playerCnt, player, game;
var gameState = 0;
var car1, car2, car3, car4;

var allPlayers;
var cars = [];

function setup(){

  database = firebase.database();
  createCanvas(displayWidth - 20, displayHeight - 30);

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

}
