var cameraX, cameraY;
var scaling;
var xOffset, yOffset;

function calculate_cameraX(){
  let players_left = number_of_players;
  let sumX = 0;
  for(let player of players){
    if(player.state<=2)
      sumX += player.posX;
    else
      players_left--;
  }
  if(players_left)
    return sumX / players_left;
  else
    return cameraX;
}

function calculate_cameraY(){
  let players_left = number_of_players;
  let sumY = 0;
  for(let player of players){
    if(player.state<=2)
      sumY += player.posY;
    else
      players_left--;
  }
  if(players_left)
    return sumY / players_left;
  else
    return cameraY;
}

function calculate_scale_by_X(){
  let max_dist_X = 0;
  for(let player_index1 of players){
    for(let player_index2 of players)
      max_dist_X = Math.max(max_dist_X, Math.abs(player_index1.posX-player_index2.posX));
  }
  return 0.8*(width-40)/max_dist_X;
}

function calculate_scale_by_Y(){
  let max_dist_Y = 0;
  for(let player_index1 of players){
    for(let player_index2 of players)
      max_dist_Y = Math.max(max_dist_Y, Math.abs(player_index1.posY-player_index2.posY));
  }
  return 0.8*(height-40)/max_dist_Y;
}