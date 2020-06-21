function starting_menu(){
  game_name_display = createSpan("SPACE PARTY");
  game_name_display.size(100, 60);
  game_name_display.position(width/2-120, height/2-100);

  button_start = createButton("START GAME");
  button_start.size(160, 25);
  button_start.position(width/2-80, height/2+50);
  button_start.mouseClicked(function(){
    game_name_display.remove();
    button_start.remove();
    button_option.remove();
    setup_new_game = true;
    loop();
  });

  button_option = createButton("OPTIONS");
  button_option.size(120, 25);
  button_option.position(width/2-60, height/2+90);
  button_option.mouseClicked(function(){
    game_name_display.remove();
    button_start.remove();
    button_option.remove();
    setup_option = true;
    loop();
  });
}

function options_display(){
  button_back = createButton("BACK");
  button_back.size(80, 25);
  button_back.position(30, height-60);
  button_back.mouseClicked(function(){
    button_back.remove();
    button_music.remove();
    button_sound.remove();
    setup_option = false;
    loop();
  });

  button_music = createButton("MUSIC: " + ((music) ? "ON" : "OFF"));
  button_music.size(150, 25);
  button_music.position(width/2-170, height/2);
  button_music.mouseClicked(function(){
    button_back.remove();
    button_music.remove();
    button_sound.remove();
    music = (music) ? false : true;
    loop();
  });

  button_sound = createButton("SOUND: " + ((sound) ? "ON" : "OFF"));
  button_sound.size(150, 25);
  button_sound.position(width/2+20, height/2);
  button_sound.mouseClicked(function(){
    button_back.remove();
    button_music.remove();
    button_sound.remove();
    sound = (sound) ? false : true;
    loop();
  });
}

function options_for_new_game(){
  button_back = createButton("BACK");
  button_back.size(80, 25);
  button_back.position(30, height-60);
  button_back.mouseClicked(function(){
    button_back.remove();
    button_begin.remove();
    button_choose_number_of_players.remove();
    setup_new_game = false;
    loop();
  });

  button_choose_number_of_players = createButton("PLAYERS: " + String(number_of_players) + "-PLAYERS");
  button_choose_number_of_players.size(300, 60);
  button_choose_number_of_players.position(width/2-150, height/2-80);
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
  button_begin.position(width-130, height-67.5);
  button_begin.mouseClicked(function(){
    button_back.remove();
    button_begin.remove();
    button_choose_number_of_players.remove();
    begin_new_game = true;
    loop();
  });
}

function pause_game(){

  push()
  let col = color(0);
  col.setAlpha(180);
  fill(col);
  rect(-width/2, -height/2, width, height);
  pop()

  word_paused = createSpan("PAUSED")
  word_paused.size(100, 60);
  word_paused.position(width/2-120, height/2-100);

  button_continue = createButton("CONTINUE");
  button_continue.size(100, 25);
  button_continue.position(width/2-50, height/2)
}