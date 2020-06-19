function result(){
  fill(rgb(33, 55, 156));
  for(let i=0;i<number_of_players;i++){
    rect(windowWidth/2-300, windowHeight/2-number_of_players*30+i*60, 600, 60);
    image()
  }
}