function keyPressed() {
  let t = frameCount / 60.0;
  if(keyCode==87){  // Bắn mỗi viên mỗi lần bấm của tàu 1 (Nút w)
    let player = players[0];
    if(player.special_ammo>0&&player.state<=1){
      fire_bullet(t, player.posX, player.posY, player.rotation, 0, player.type_special_ammo);
      player.special_ammo--;
    }
    else if(player.normal_ammo>0&&player.state<=1){
      fire_bullet(t, player.posX, player.posY, player.rotation, 0, "normal");
      player.normal_ammo--;
    }
  }
  if(keyCode==86){  // Bắn mỗi viên mỗi lần bấm của tàu 2 (Nút v)
    let player = players[1];
    if(player.special_ammo>0&&player.state<=1){
      fire_bullet(t, player.posX, player.posY, player.rotation, 1, player.type_special_ammo);
      player.special_ammo--;
    }
    else if(player.normal_ammo!=0&&player.state<=1){
      fire_bullet(t, player.posX, player.posY, player.rotation, 1, "normal");
      player.normal_ammo--;
    }
  }
  if(keyCode==75){  // Bắn mỗi viên mỗi lần bấm của tàu 3 (Nút k)
    let player = players[2];
    if(player.special_ammo>0&&player.state<=1){
      fire_bullet(t, player.posX, player.posY, player.rotation, 2, player.type_special_ammo);
      player.special_ammo--;
    }
    else if(player.normal_ammo!=0&&player.state<=1){
      fire_bullet(t, player.posX, player.posY, player.rotation, 2, "normal");
      player.normal_ammo--;
    }
  }
  if(keyCode==220){  // Bắn mỗi viên mỗi lần bấm của tàu 4 (Nút \)
    let player = players[3];
    if(player.special_ammo>0&&player.state<=1){
      fire_bullet(t, player.posX, player.posY, player.rotation, 3, player.type_special_ammo);
      player.special_ammo--;
    }
    else if(player.normal_ammo!=0&&player.state<=1){
      fire_bullet(t, player.posX, player.posY, player.rotation, 3, "normal");
      player.normal_ammo--;
    }
  }
}