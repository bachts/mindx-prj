var players = [], flying_bullets = [], player_score = [], power_ups = [], mines = [];
var aftermath_actions = [];

function new_game_Start(){

  countdown = 200;
  end_round = 0;
  end_round_time = 0;
  reverse_state = 0;

  while(mines.length>0)
    mines.pop();
  while(flying_bullets.length>0)
    flying_bullets.pop();
  while(power_ups.length>0)
    power_ups.pop();
  while(aftermath_actions.length>0)
    aftermath_actions.pop();
  while(players.length>0){
    players.pop();
    player_score.pop();
  }
  players.push(new player1());
  player_score.push(0);
  players.push(new player2());
  player_score.push(0);
  if(number_of_players==3){
    players.push(new player3());
    player_score.push(0);
  }
  else if(number_of_players==4){
    players.push(new player3());
    player_score.push(0);
    players.push(new player4());
    player_score.push(0);
  }

  new_random_power_spawn(game_Width/2, game_Height/2);
}

function new_round_Start(){

  end_round_time = 0;
  countdown = 200;
  end_round = 0;
  reverse_state = 0;

  while(players.length>0)
    players.pop();
  while(mines.length>0)
    mines.pop();
  while(flying_bullets.length>0)
    flying_bullets.pop();
  while(power_ups.length>0)
    power_ups.pop();
  while(aftermath_actions.length>0)
    aftermath_actions.pop();
  players.push(new player1());
  players.push(new player2());
  if(number_of_players==3)
    players.push(new player3());
  else if(number_of_players==4){
    players.push(new player3());
    players.push(new player4());
  }

  new_random_power_spawn(game_Width/2, game_Height/2);
}