var players = [], flying_bullets = [], player_score = [], power_ups = [], mines = [];

var reverse_state = 0;

var start_new_game, start_option;

var countdown, end_round;

var number_of_players = 4;

function setup() {

  textFont(game_Font);
  createCanvas(windowWidth, windowHeight);
  frameRate(60);

  start_new_game = false;
  start_option = false;
  begin_a_game = false;
  countdown = 200;
  end_round = 0;
  
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
  if(countdown>0){
    for(let player of players){
      player.display_ship();
      player.display_ammo();
    }
    countdown--;
  }
  if(countdown%60>=40&&countdown>0){
    push();
    fill(0);
    textSize(24);
    text(int(countdown/60)+1, windowWidth/2-12, windowHeight/2+14);
    pop();
  }
  if(countdown==0){
    for(let power of power_ups){
      if(end_round<180)
        power.update();
      power.display();
    }
    for(let bullet of flying_bullets){
      if(end_round<180)
        bullet.update();
      bullet.display();
    }
    for(let mine of mines){
      if(end_round<180)
        mine.update();
      mine.display();
    }
    let players_left = 4;
    for(let player of players){
      if(player.state<=2){
        if(end_round<180)
          player.update();
        player.display_ship();
        player.display_ammo();
      }
      else
        players_left--;
    }
    if(players_left<=1&&end_round<180)
      end_round++;
    else if(end_round==180){
      winner = result();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}