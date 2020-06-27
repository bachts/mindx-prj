var music = true, sound = true;
var game_setup_complete;
var reverse_state;
var player_setup, setup_option, setup_new_game, begin_new_game, advance_setting;
var countdown, end_round, end_round_time;
var number_of_players = 2;
var match_index = 0;

var type = ["QUICK", "NORMAL", "LONG"];
var number_of_wins = [
  [1, 3, 5],
  [4, 6, 10],
  [4, 8, 12],
];

var game_Height, game_Width;

function setup() {

  textFont(game_Font);
  game_Height = displayHeight;
  game_Width = displayWidth;
  createCanvas(game_Width, game_Height);
  frameRate(60);

  setup_option = false;
  player_setup = false;
  setup_new_game = false;
  begin_new_game = false;
  advance_setting = false;
}

function draw(){
  image(space_background, 0, 0, game_Width, game_Height);
  if(!player_setup&&!setup_option){
    noLoop();
    starting_menu();
  }
  else if(setup_option){
    noLoop();
    options_display();
  }
  else if(player_setup){
    if(!setup_new_game){
      noLoop();
      player_option();
    }
    else{
      if(!begin_new_game&&!advance_setting){
        game_setup_complete = false;
        noLoop();
        options_for_new_game();
      }
      else if(advance_setting){
        noLoop();
        advance_options();
      }
      else if(begin_new_game){
        push();
        camera_coord = calculate_camera();
        cameraX = camera_coord[0];
        cameraY = camera_coord[1];
        scaling = Math.max(0.8, Math.min(Math.min(calculate_scale_by_X(), calculate_scale_by_Y()), 1.5));
        xOffset = cameraX - game_Width/2;
        yOffset = cameraY - game_Height/2;
        scale(scaling);
        translate((game_Width/2)/scaling, (game_Height/2)/scaling);
        if(!game_setup_complete){
          new_game_Start();
          game_setup_complete = true;
        }
        push()
        circle(0, 0, 10);
        strokeWeight(10);
        noFill();
        stroke("blue");
        rect(20-(game_Width/2)-xOffset, 20-(game_Height/2)-yOffset, game_Width-40, game_Height-40, 5);
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
          text(int(countdown/60)+1, -12, 14);
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
          if(mouseIsPressed){
            noLoop();
            pause_game();
          }
          if(players_left<=1&&end_round<180)
            end_round++;
          else if(end_round==180){
            aftermath_actions = sort_changes(aftermath_actions);
            Scoreboard();
          }
          pop()
        }
      }
    }
  }
}

