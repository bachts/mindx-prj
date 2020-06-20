function starting_menu(){

  push()
  game_name_display = createSpan("SPACE PARTY");
  elements.push(game_name_display);
  game_name_display.size(100, 60);
  game_name_display.position(windowWidth/2 - 120, windowHeight/2 - 100);

  button_start = createButton("START GAME");
  elements.push(button_start);
  button_start.size(160, 25);
  button_start.position(windowWidth/2 - 80, windowHeight/2 + 50);
  button_start.mouseClicked(function(){
    game_name_display.remove();
    button_start.remove();
    button_option.remove();

    setup_new_game=true;
    loop();
  });

  button_option = createButton("OPTIONS");
  elements.push(button_option);
  button_option.size(120, 25);
  button_option.position(windowWidth/2 - 60, windowHeight/2 + 90);
  button_option.mouseClicked(function(){
    game_name_display.remove();
    button_start.remove();
    button_option.remove();

    setup_option=true;
    loop();
  })
  pop()
}

function options_display(){

  push()
  button_back = createButton("BACK");
  button_back.size(80, 25);
  button_back.position(30, windowHeight-60);
  button_back.mouseClicked(function(){
    button_back.remove();
    button_music.remove();
    button_sound.remove();

    setup_option = false;
    loop();
  });

  button_music = createButton("MUSIC: " + ((music) ? "ON" : "OFF"));
  button_music.size(150, 25);
  button_music.position(windowWidth/2-170, windowHeight/2);
  button_music.mouseClicked(function(){
    button_back.remove();
    button_music.remove();
    button_sound.remove();

    music = (music) ? false : true;
    loop();
  });

  button_sound = createButton("SOUND: " + ((sound) ? "ON" : "OFF"));
  button_sound.size(150, 25);
  button_sound.position(windowWidth/2+20, windowHeight/2);
  button_sound.mouseClicked(function(){
    button_back.remove();
    button_music.remove();
    button_sound.remove();

    sound = (sound) ? false : true;
    loop();
  });
  pop()
}

function options_for_new_game(){

  push()
  button_back = createButton("BACK");
  button_back.size(80, 25);
  button_back.position(30, windowHeight-60);
  button_back.mouseClicked(function(){
    button_back.remove();
    button_begin.remove();
    button_choose_number_of_players.remove();

    setup_new_game = false;
    loop();
  });

  button_choose_number_of_players = createButton("PLAYERS: " + String(number_of_players) + "-PLAYERS");
  button_choose_number_of_players.size(300, 60);
  button_choose_number_of_players.position(windowWidth/2-150, windowHeight/2-80);
  button_choose_number_of_players.mouseClicked(function(){
    button_back.remove();
    button_begin.remove();
    button_choose_number_of_players.remove();

    let index = [1, 2, 0], number = [2, 3, 4];
    number_of_players = number[index[number.indexOf(number_of_players)]];
    loop();
  });

  button_begin = createButton("BEGIN >>");
  button_begin.size(100, 40);
  button_begin.position(windowWidth-130, windowHeight-67.5);
  button_begin.mouseClicked(function(){
    button_back.remove();
    button_begin.remove();
    button_choose_number_of_players.remove();

    begin_new_game = true;
    loop();
  });
  pop()
}

function start_new_game(){
  countdown = 200;
  end_round = 0;
  moving = 0;
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
  new_random_power_spawn(windowWidth/2, windowHeight/2);
}

function start_new_round(){
  moving = 0;
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
  new_random_power_spawn(windowWidth/2, windowHeight/2);
}

// function mouseClicked(){
//   if()
// }