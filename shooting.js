var players = [], flying_bullets = [], player_score = [], power_ups = [], mines = [];

var reverse_state = 0;

var start_new_game, start_option;

function setup() {

  textFont(game_Font);
  createCanvas(windowWidth, windowHeight);
  frameRate(60);

  start_new_game = false;
  start_option = false;
  begin_a_game = false;
  
  for(i=0;i<4;i++)
    player_score.push(0);
  players.push(new player1());
  players.push(new player2());
  players.push(new player3());
  players.push(new player4());
  new_random_power_spawn(windowWidth/2, windowHeight/2);
}

function draw(){
  image(space_background, 0, 0, windowWidth, windowHeight);
  // if(!start_new_game&&!start_option){
  //   noLoop();
  //   starting_menu();
  // }
  // else if(start_option){
  //   options_display();
  //   noLoop();
  // }
  push()
  strokeWeight(10);
  noFill();
  stroke("blue");
  rect(20, 20, windowWidth-40, windowHeight-40, 5);
  pop()
  for(i=0;i<4;i++){
    textSize(16);
    text(player_score[i], 20+i*20, 20);
  }
  for(let power of power_ups){
    power.update();
    power.display(t);
  }
  for(let bullet of flying_bullets){
    bullet.update();
    bullet.display();
  }
  for(let mine of mines){
    mine.update();
    mine.display();
  }
  for(let player of players){
    if(player.state<=2){
      player.update();
      player.display_ship();
      player.display_ammo();
    }
  }
  for(let bullet of flying_bullets){
    bullet.update();
    bullet.display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}