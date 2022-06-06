//variáveis 
var canvas;
var backgroundImage;
var database;
var form, player;
var playerCount;


function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  //Iniciando banco de dados
  database = firebase.database();

  //objeto de jogo é criado
  game = new Game();
  game.start();

}

function draw() {
  background(backgroundImage);
}

//sempre que há atualização ela ajusta automaticamente o tamanho da tela. 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
