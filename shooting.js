var players = [], flying_bullets = [], player_score = [], power_ups = [], mines = [];
var aftermath_actions = [];
var elements = [];

var music = true, sound = true;
var game_setup_complete;
var reverse_state;
var setup_new_game, setup_option;
var countdown, end_round, moving;
var number_of_players = 2;

var height, width;

function setup() {

  textFont(game_Font);
  height = displayHeight;
  width = displayWidth;
  createCanvas(width, height);
  frameRate(60);

  setup_new_game = false;
  setup_option = false;
  begin_new_game = false;
}

function draw(){
  image(space_background, 0, 0, width, height);
  if(!setup_new_game&&!setup_option){
    noLoop();
    starting_menu();
  }
  else if(setup_option){
    noLoop();
    options_display();
  }
  else if(setup_new_game){
    if(!begin_new_game){
      game_setup_complete = false;
      noLoop();
      options_for_new_game();
    }
    else{
      scale(1.25);
      if(!game_setup_complete){
        start_new_game();
        game_setup_complete = true;
      }
      push()
      strokeWeight(10);
      noFill();
      stroke("blue");
      rect(20, 20, width-40, height-40, 5);
      pop()
      if(countdown>0){
        for(let player of players){
          player.display_ship();
          player.display_ammo();
        }
        for(let power of power_ups)
          power.display();
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
        let players_left = number_of_players;
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
          scoreboard();
        }
      }
    }
  }
}

