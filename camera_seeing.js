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

function calculate_scale(){
  let max_dist = 0;
  for(let player of players)
    max_dist = Math.max(max_dist, dist(player.posX, player.posY, cameraX, cameraY));
  let scally = 0.7*Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2))/(2*max_dist)
  return (scally>1.75)? 1.75 : scally;
}