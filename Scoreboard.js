function Scoreboard(){

  push()
  scale(1/scaling);
  imageMode(CENTER);
  let col = color(0);
  col.setAlpha(180);
  fill(col);
  rect(-game_Width/2, -game_Height/2, game_Width, game_Height);
  col.setAlpha(255);
  fill(33, 55, 156);
  if(end_round_time/70>=aftermath_actions.length+1){
    new_round_Start();
  }
  if(end_round_time/70<aftermath_actions.length+1&&end_round_time/70>=aftermath_actions.length){
    for(let i=0;i<number_of_players;i++){
      rect(-300, -number_of_players*30+i*60, 600, 60);
      push()
      translate(-280+player_score[i]*54, -number_of_players*30+i*60+30);
      rotate(HALF_PI);
      image(all_ships[i][0], 0, 0);
      pop()
    }
  }
  if(end_round_time/70<aftermath_actions.length){
    let action = aftermath_actions[int(end_round_time/70)];
    // if(player_score[action[0]]+action[1]<0)
    //   action[1] = 0;
    for(let i=0;i<number_of_players;i++){
      rect(-300, -number_of_players*30+i*60, 600, 60);
      if(i!=action[0]){
        push()
        translate(-280+player_score[i]*54, -number_of_players*30+i*60+30);
        rotate(HALF_PI);
        image(all_ships[i][0], 0, 0);
        pop()
      }
      else if(i==action[0]&&action[1]>0){
        push()
        translate(-280+player_score[i]*54+(((end_round_time%70>60)?60:end_round_time%70)/60)*54, -number_of_players*30+i*60+30);
        rotate(HALF_PI);
        image(all_ships[i][0], 0, 0);
        pop()
      }
      else{
        push()
        translate(-280+player_score[i]*54+action[1]*(((end_round_time%70>60)?60:end_round_time%70)/60)*54, -number_of_players*30+i*60+30);
        rotate(HALF_PI);
        rotate(((end_round_time%70>60)?60:end_round_time%70)/5);
        image(all_ships[i][0], 0, 0);
        pop()
      }
    }
    if(end_round_time%70==69)
      player_score[action[0]] += action[1];
  }
  end_round_time++;
  pop();
}