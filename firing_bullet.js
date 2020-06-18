function firing_bullet(x, y, rotation, number, type){
  if(type=="mine")
    mines.push(new mine_bullets(x, y, number));
  else if(type=="laser"){
    flying_bullets.push(new laser_bullets(x, y, rotation, number));
    players[number].knockback = 8;
  }
  else if(type=="scatter"){
    for(let i=0;i<24;i++)
      flying_bullets.push(new scatter_bullets(x, y, 15*i, number));
  }
  else if(type=="normal")
    flying_bullets.push(new normal_bullets(x, y, rotation, number));
}

function keyPressed() {
  if(keyCode==87){  // Bắn mỗi viên mỗi lần bấm của tàu 1 (Nút w)
    let player = players[0];
    if(player.special_ammo>0&&player.state<=1){
      firing_bullet(player.posX, player.posY, player.rotation, 0, player.type_special_ammo);
      player.special_ammo--;
      if(player.special_ammo==0)
        player.type_special_ammo = "normal";
    }
    else if(player.normal_ammo>0&&player.state<=1){
      firing_bullet(player.posX, player.posY, player.rotation, 0, "normal");
      player.normal_ammo--;
    }
  }
  if(keyCode==86){  // Bắn mỗi viên mỗi lần bấm của tàu 2 (Nút v)
    let player = players[1];
    if(player.special_ammo>0&&player.state<=1){
      firing_bullet(player.posX, player.posY, player.rotation, 1, player.type_special_ammo);
      player.special_ammo--;
      if(player.special_ammo==0)
        player.type_special_ammo = "normal";
    }
    else if(player.normal_ammo!=0&&player.state<=1){
      firing_bullet(player.posX, player.posY, player.rotation, 1, "normal");
      player.normal_ammo--;
    }
  }
  if(keyCode==75){  // Bắn mỗi viên mỗi lần bấm của tàu 3 (Nút k)
    let player = players[2];
    if(player.special_ammo>0&&player.state<=1){
      firing_bullet(player.posX, player.posY, player.rotation, 2, player.type_special_ammo);
      player.special_ammo--;
      if(player.special_ammo==0)
        player.type_special_ammo = "normal";
    }
    else if(player.normal_ammo!=0&&player.state<=1){
      firing_bullet(player.posX, player.posY, player.rotation, 2, "normal");
      player.normal_ammo--;
    }
  }
  if(keyCode==220){  // Bắn mỗi viên mỗi lần bấm của tàu 4 (Nút \)
    let player = players[3];
    if(player.special_ammo>0&&player.state<=1){
      firing_bullet(player.posX, player.posY, player.rotation, 3, player.type_special_ammo);
      player.special_ammo--;
      if(player.special_ammo==0)
        player.type_special_ammo = "normal";
    }
    else if(player.normal_ammo!=0&&player.state<=1){
      firing_bullet(player.posX, player.posY, player.rotation, 3, "normal");
      player.normal_ammo--;
    }
  }
}