//Bolinha
let xBolinha = 175;
let yBolinha = 100;
let diametro = 12;
let raio = diametro / 2;

//Velocidade x e y da Bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//Nossa raquete
let xRaquete = 2;
let yRaquete = 75;
let larguraRaquete = 9;
let alturaRaquete = 50;

//Raquete Adversário
let xOponente = 339;
let yOponente = 75;
let velocidadeYOponente;

//Colisão Raquetes com Bolinha
let colidiu = false;

//Placar
let meusPontos = 0;
let pontosOponente = 0;

//sons do Jogo
let somRaquetada;
let somPonto;
let trilhaSonora;

function preload(){
  somRaquetada = loadSound("raquetada.mp3");
  somPonto = loadSound("ponto.mp3")
  trilhaSonora =  loadSound("trilha.mp3")
  
}

function setup() {
  createCanvas(350, 200);
  trilhaSonora.loop();
}

function draw() {
  //Desenha o background 
  background(0); 
  //Desenha a bolinha
  mostraBolinha(); 
  //Movimenta a Bolinha
  movimentoBolinha(); 
  //Verifica a Colisão da bolinha com a borda
  verificaColisaoBorda(); 
 //Desenha e mosta raquete no jogo
  mostraRaquete(xRaquete, yRaquete);
  //Movimenta raquete clicando nas detas baixo e cima do teclado
  movimentoMinhaRaquete ();
  //Verifica a Colisão da bolinha com a Raquete minha versão
  //verificaColisaoRaquete();
  //Verifica colisão da raquete com a bolinha biblioteca feito por outra pessoa
  verificaColisaoRaquetes(xRaquete, yRaquete);
  verificaColisaoRaquetes(xOponente, yOponente)
  
 
  mostraRaquete(xOponente, yOponente);
  //movimentaOponente();
  
  incluiPlacar();
  marcaPontos();
 //Volta para o início da função draw() criando um loop
}



function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}


function verificaColisaoBorda(){
   if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }  
  
}


function movimentoBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  //xBolinha = xBolinha + velocidadeXBolinha;
}

function mostraRaquete(x, y){
  rect(x, y, larguraRaquete, alturaRaquete);
}

function movimentoMinhaRaquete(){
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 5;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 5;
  }
}
/*
function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + larguraRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}*/
/*
function verificaColisaoRaquete(x,y){
  if (xBolinha - raio < x + larguraRaquete && yBolinha - raio < y + alturaRaquete && yBolinha + raio > y){
    velocidadeXBolinha *= -1;
  }
}*/

/* Essa função foi abstraida em uma só junto com a outra raquete

function mostraOponente(){
  rect(xOponente, yOponente, larguraOponente, alturaOponente);
}
*/

function movimentaOponente (){
  velocidadeYOponente = yBolinha - yOponente - larguraRaquete / 2 -30;
  yOponente += velocidadeYOponente;
}

function verificaColisaoRaquetes(x, y){
  colidiu =
  collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1; 
    somRaquetada. play();
  }
}
function incluiPlacar(){
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140 ,0));
  rect(67, 5, 40,20);
  fill(255);
  text(meusPontos, 87, 20);
  fill(color(255, 140, 0));;
  rect(243, 5, 40, 20);
  fill(255);
  text(pontosOponente, 263 , 20);
}

function marcaPontos(){
  if (xBolinha > 343){
    meusPontos += 1;
    somPonto.play();
  }
  if (xBolinha < 8){
    pontosOponente += 1;
    somPonto.play();
  }
}



