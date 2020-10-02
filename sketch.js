var paddle1, paddle2,ball,Edges, player1Score, player2Score, gameState ; 

function setup() {
  createCanvas(400, 400);
  gameState = "serve"
  player1Score = 0
  player2Score = 0
  paddle2=createSprite(25,200,10,75);
  paddle1=createSprite(375,200,10,75);
  ball=createSprite(200,200,20,20);
  Edges = createEdgeSprites();
  
  
  
  
}

function draw() {
  background(255);
  fill("Black");
  text(player1Score,230,15);
  text( player2Score,170,15);
  textSize(20)
  
  text("Player 1",50,370);
  text("Player 2",300,370);
  
    for (var i = 0; i < 400; i=i+20) {
    line(200,i,200,i+10);
  }
  if(keyDown("O")){
    paddle1.y = paddle1.y -4
  }
    if(keyDown("L")){
     paddle1.y = paddle1.y +4;
     }
  if(keyDown("W")){
    paddle2.y = paddle2.y -4
  }
  if(keyDown("S")){
    paddle2.y = paddle2.y +4
  }
  if(keyDown("SPACE") && gameState === "serve"){
    ball.velocityY = 4
    ball.velocityX = 4
    gameState = "play" 
  }
  if(ball.x < 0){
    player1Score = player1Score + 1;
  }
  if(ball.x > 400){
    player2Score = player2Score + 1;
  }
  if(gameState === "serve"){
    textSize(15);
    fill("Black");
    text("Press Space to serve",140,170);
  }
  if(player1Score === 5 || player2Score ===5){
    gameState = "over"
    textSize(15);
    text("Game Over press R to restart",100,170);
    if(player1Score > player2Score){
      text("Player 1 won the game",100,230)
    }
    else if(player1score < player2score){
      text("Player 2 won the game",100,230)
    }
  }
  
  if(keyDown("R")){
    player1Score = 0
    player2Score = 0
    gameState = "serve"
  }
    
  
  ball.bounceOff(paddle1);
  ball.bounceOff(paddle2);
  ball.bounceOff(Edges[2]);
  ball.bounceOff(Edges[3]);
  paddle1.collide(Edges[2]);
  paddle1.collide(Edges[3]);
  paddle2.collide(Edges[2]);
  paddle2.collide(Edges[3]);
  
  ballReset();
  drawSprites();
}
function ballReset(){
  if(ball.x > 400 || ball.x < 0){
    ball.x = 200;
    ball.y = 200;
    ball.velocityY = 0;
    ball.velocityX= 0;
    gameState = "serve"
  }
  
}