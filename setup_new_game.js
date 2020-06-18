function starting_menu(){
  push()
  button_1 = createButton("START GAME");
  button_1.size(160, 25);
  button_1.position(windowWidth/2 - 80, windowHeight/2 + 50);
  button_1.mouseClicked(function(){
    start_new_game=true;
    loop();
    button_2.remove();
    button_1.remove();
  });

  button_2 = createButton("OPTIONS");
  button_2.size(120, 25);
  button_2.position(windowWidth/2 - 60, windowHeight/2 + 90);
  button_2.mouseClicked(function(){
    start_option=true;
    loop();
    button_1.remove();
    button_2.remove();
  })
  pop()
}

function options_display(){
  push()
  button_back = createButton("BACK");
  button_back.size(80, 25);
  button_back.position(30, windowHeight-60);
  button_back.mouseClicked(function(){
    start_option=false;
    loop();
    button_back.remove();
    button_music.remove();
    button_sound.remove();
  });

  button_music = createButton("MUSIC");
  button_music.size(100, 25);
  button_music.position(windowWidth/2-120, windowHeight/2);
  button_music.mouseClicked(function(){
    
  });

  button_sound = createButton("SOUND");
  button_sound.size(100, 25);
  button_sound.position(windowWidth/2+20, windowHeight/2);

  pop()
}

function setup_new_game(number_of_players){
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
}