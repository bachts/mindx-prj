function starting_menu(){
  game_name_display = createSpan("SPACE PARTY");
  game_name_display.size(100, 60);
  game_name_display.position(game_Width/2-120, game_Height/2-100);

  button_start = createButton("START GAME");
  button_start.size(160, 25);
  button_start.position(game_Width/2-80, game_Height/2+50);
  button_start.mouseClicked(function(){
    game_name_display.remove();
    button_start.remove();
    button_option.remove();
    player_setup = true;
    loop();
  });

  button_option = createButton("OPTIONS");
  button_option.size(120, 25);
  button_option.position(game_Width/2-60, game_Height/2+90);
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
  button_back.position(30, game_Height-60);
  button_back.mouseClicked(function(){
    button_back.remove();
    button_music.remove();
    button_sound.remove();
    setup_option = false;
    loop();
  });

  button_music = createButton("MUSIC: " + ((music) ? "ON" : "OFF"));
  button_music.size(150, 25);
  button_music.position(game_Width/2-170, game_Height/2);
  button_music.mouseClicked(function(){
    button_back.remove();
    button_music.remove();
    button_sound.remove();
    music = (music) ? false : true;
    loop();
  });

  button_sound = createButton("SOUND: " + ((sound) ? "ON" : "OFF"));
  button_sound.size(150, 25);
  button_sound.position(game_Width/2+20, game_Height/2);
  button_sound.mouseClicked(function(){
    button_back.remove();
    button_music.remove();
    button_sound.remove();
    sound = (sound) ? false : true;
    loop();
  });
}

function player_option(){
  button_back = createButton("BACK");
  button_back.size(80, 25);
  button_back.position(30, game_Height-60);
  button_back.mouseClicked(function(){
    button_back.remove();
    button_begin.remove();
    button_choose_number_of_players.remove();
    control_guidance.remove();
    player_setup = false;
    loop();
  });

  button_choose_number_of_players = createButton("PLAYERS: " + String(number_of_players) + "-PLAYERS");
  button_choose_number_of_players.size(300, 60);
  button_choose_number_of_players.position(game_Width/2-150, game_Height/2-80);
  button_choose_number_of_players.mouseClicked(function(){
    button_back.remove();
    button_begin.remove();
    button_choose_number_of_players.remove();
    control_guidance.remove();
    let index = [1, 2, 0], number = [2, 3, 4];
    number_of_players = number[index[number.indexOf(number_of_players)]];
    loop();
  });

  if(number_of_players==2)
    control_guidance = createP(
      "PLAYER 1:&emsp;TURN: Button 'q'&emsp;SHOOT: Button 'w'<br><br>PLAYER 2:&emsp;TURN: Button ']'&emsp;SHOOT: Button '\\'"
    );
  else if(number_of_players==3)
    control_guidance = createP(
      "PLAYER 1:&emsp;TURN: Button 'q'&emsp;SHOOT: Button 'w'<br><br>PLAYER 2:&emsp;TURN: Button ']'&emsp;SHOOT: Button '\\'<br><br>PLAYER 3:&emsp;TURN: Button 'j'&emsp;SHOOT: Button 'k'"
    );
  else if(number_of_players==4)
    control_guidance = createP(
      "PLAYER 1:&emsp;TURN: Button 'q'&emsp;SHOOT: Button 'w'<br><br>PLAYER 2:&emsp;TURN: Button ']'&emsp;SHOOT: Button '\\'<br><br>PLAYER 3:&emsp;TURN: Button 'j'&emsp;SHOOT: Button 'k'<br><br>PLAYER 4:&emsp;TURN: Button 'c'&emsp;SHOOT: Button 'v'"
    );
  control_guidance.size(600, 300);
  control_guidance.position(game_Width/2-250, game_Height/2+10);

  button_begin = createButton("NEXT >>");
  button_begin.size(100, 40);
  button_begin.position(game_Width-130, game_Height-67.5);
  button_begin.mouseClicked(function(){
    button_back.remove();
    button_begin.remove();
    button_choose_number_of_players.remove();
    control_guidance.remove();
    setup_new_game = true;
    loop();
  });
}

function options_for_new_game(){
  button_back = createButton("BACK");
  button_back.size(80, 25);
  button_back.position(30, game_Height-60);
  button_back.mouseClicked(function(){
    button_back.remove();
    button_type_match.remove();
    button_advance_setting.remove();
    button_begin.remove();
    setup_new_game = false;
    loop();
  });

  button_type_match = createButton(type[match_index] + " MATCH: " + number_of_wins[number_of_players-2][match_index] + " WINS");
  button_type_match.size(300, 40);
  button_type_match.position(game_Width/2-150, game_Height/2-30);
  button_type_match.mouseClicked(function(){
    button_back.remove();
    button_type_match.remove();
    button_advance_setting.remove();
    button_begin.remove();
    let index = [1, 2, 0];
    match_index = index[match_index];
    loop();
  });

  button_advance_setting = createButton("ADVANCE SETTING");
  button_advance_setting.size(300, 40);
  button_advance_setting.position(game_Width/2-150, game_Height/2+20);
  button_advance_setting.mouseClicked(function(){
    button_back.remove();
    button_type_match.remove();
    button_advance_setting.remove();
    button_begin.remove();
    advance_setting = true;
    loop();
  });

  button_begin = createButton("BEGIN >>");
  button_begin.size(100, 40);
  button_begin.position(game_Width-130, game_Height-67.5);
  button_begin.mouseClicked(function(){
    button_back.remove();
    button_type_match.remove();
    button_advance_setting.remove();
    button_begin.remove();
    begin_new_game = true;
    loop();
  });
}

function pause_game(){

  push()
  scale(1/scaling);
  let col = color(0);
  col.setAlpha(180);
  fill(col);
  rect(-game_Width/2, -game_Height/2, game_Width, game_Height);
  pop()

  word_paused = createSpan("PAUSED");
  word_paused.size(100, 60);
  word_paused.position(game_Width/2-145, game_Height/2-100);

  button_continue = createButton("CONTINUE");
  button_continue.size(120, 25);
  button_continue.position(game_Width/2+20, game_Height/2);
  button_continue.mouseClicked(function(){
    word_paused.remove();
    button_continue.remove();
    button_return_to_menu.remove();
    loop();
  });

  button_return_to_menu = createButton("RETURN TO MENU");
  button_return_to_menu.size(200, 25)
  button_return_to_menu.position(game_Width/2-220, game_Height/2);
  button_return_to_menu.mouseClicked(function(){
    word_paused.remove();
    button_continue.remove();
    button_return_to_menu.remove();
    setup_new_game = false;
    setup_option = false;
    begin_new_game = false;
    advance_setting = false;
    player_option = false;
    loop();
  });
}