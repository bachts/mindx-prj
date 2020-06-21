function scoreboard(){
  push()
  scale(1/scaling);
  imageMode(CENTER);
  let col = color(0);
  col.setAlpha(180);
  fill(col);
  rect(-width/2, -height/2, width, height);
  col.setAlpha(255);
  fill(33, 55, 156);
  if(moving/70>=aftermath_actions.length+0.5)
    start_new_round();
  if(moving/70<aftermath_actions.length+0.5&&moving/70>=aftermath_actions.length){
    for(let i=0;i<number_of_players;i++){
      rect(-300, -number_of_players*30+i*60, 600, 60);
      push()
      translate(-280+player_score[i]*54, -number_of_players*30+i*60+30);
      rotate(HALF_PI);
      image(all_ships[i][0], 0, 0);
      pop()
    }
  }
  if(moving/70<aftermath_actions.length){
    let action = aftermath_actions[int(moving/70)];
    if(player_score[action[0]]+action[1]<0)
        action[1] = 0;
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
        translate(-280+player_score[i]*54+(((moving%70>60)?60:moving%70)/60)*54, -number_of_players*30+i*60+30);
        rotate(HALF_PI);
        image(all_ships[i][0], 0, 0);
        pop()
      }
      else{
        push()
        translate(-280+player_score[i]*54-(((moving%70>60)?60:moving%70)/60)*54, -number_of_players*30+i*60+30);
        rotate(HALF_PI);
        rotate(((moving%70>60)?60:moving%70)/5);
        image(all_ships[i][0], 0, 0);
        pop()
      }
    }
    if(moving%70==69)
      player_score[action[0]] += action[1];
  }
  moving++;
  pop();
}