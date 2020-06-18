function normal_bullets(x, y, rotation, number){

  this.angle = TWO_PI*rotation/360.0;
  this.persec = [sin(this.angle), -cos(this.angle)];

  this.posX = x + this.persec[0]*19;
  this.posY = y + this.persec[1]*19;

  this.player_shot = number;

  this.update = function() {
    for(let mine of mines){
      if(len(mine.posX, mine.posY, this.posX, this.posY)<=12){
        mine.triggered = true;
        let index = flying_bullets.indexOf(this);
        flying_bullets.splice(index, 1);
        break;
      }
    }
    for(let player of players){
      if(player.state<=2 && len(player.posX, player.posY, this.posX, this.posY)<=17 && player.order!=this.player_shot){
        player.state++;
        if(player.state==3){
          player_score[this.player_shot]++;
          if(player.type_special_ammo!="normal"){
            dropout_power(player.posX, player.posY, player.type_special_ammo);
            player.type_special_ammo = "normal";
          }
        }
        let index = flying_bullets.indexOf(this);
        flying_bullets.splice(index, 1);
        break;
      }
    }
    if (this.posX<=27 || this.posX>=windowWidth-27 || this.posY<=27 || this.posY>=windowHeight-27){
      let index = flying_bullets.indexOf(this);
      flying_bullets.splice(index, 1);
    }
    this.posX += (this.persec[0] * 3);
    this.posY += (this.persec[1] * 3);
  };

  this.display = function() {
    push()
    translate(this.posX, this.posY);
    rotate(this.angle);
    imageMode(CENTER);
    image(normal_bullet_png, 0, 0);
    pop()
  };
}

function mine_bullets(x, y, number){

  this.posX = x;
  this.posY = y;

  this.player_shot = number;

  this.counting_to_explode = 0;
  this.triggered = false;

  this.update = function() {
    if(!this.triggered){
      for(let player of players){
        if(player.state<=1 && len(player.posX, player.posY, this.posX, this.posY)<=100 && player.order!=this.player_shot){
          this.triggered = true;
          break;
        }
      }
    }
    else if(this.counting_to_explode>=25&&this.counting_to_explode<55){
      for(let mine of mines){
        if(len(mine.posX, mine.posY, this.posX, this.posY)<=100 && !mine.triggered){
          mine.triggered = true;
          mine.counting_to_explode = 25;
        }
      }
      for(let player of players){
        if(player.state<=2 && len(player.posX, player.posY, this.posX, this.posY)<=100){
          player.state = 3;
          if(player.state==3){
            player_score[this.player_shot]++;
            if(player.type_special_ammo!="normal"){
              dropout_power(player.posX, player.posY, player.type_special_ammo);
              player.type_special_ammo = "normal";
            }
          }
        }
      }
    }
    else if(this.counting_to_explode==55){
      let index = mines.indexOf(this);
      mines.splice(index, 1);
    }
    if(this.triggered)
      this.counting_to_explode++;
  };

  this.display = function() {
    push()
    translate(this.posX, this.posY);
    if(!this.triggered){
      imageMode(CENTER);
      image(mine_bullet_png, 0, 0);
    }
    else if(this.triggered&&this.counting_to_explode<25){
      rotate(this.counting_to_explode/5);
      imageMode(CENTER);
      image(mine_bullet_png, 0, 0);
    }
    else if(this.triggered&&this.counting_to_explode>=25){
      noStroke();
      let col = color(255);
      col.setAlpha((55-this.counting_to_explode)*255/30);
      fill(col);
      circle(0, 0, 100*2);
    }
    pop()
  };
}

function scatter_bullets(x, y, rotation, number){

  this.angle = TWO_PI*rotation/360.0;
  this.persec = [sin(this.angle), -cos(this.angle)];

  this.posX = x + this.persec[0]*2;
  this.posY = y + this.persec[1]*2;

  this.player_shot = number;

  this.update = function() {
    for(let mine of mines){
      if(len(mine.posX, mine.posY, this.posX, this.posY)<=12){
        mine.triggered = true;
        let index = flying_bullets.indexOf(this);
        flying_bullets.splice(index, 1);
        break;
      }
    }
    for(let player of players){
      if(player.state<=2 && len(player.posX, player.posY, this.posX, this.posY)<=17 && player.order!=this.player_shot){
        player.state++;
        if(player.state==3){
          player_score[this.player_shot]++;
          if(player.type_special_ammo!="normal"){
            dropout_power(player.posX, player.posY, player.type_special_ammo);
            player.type_special_ammo = "normal";
          }
        }
        let index = flying_bullets.indexOf(this);
        flying_bullets.splice(index, 1);
        break;
      }
    }
    if (this.posX<=27 || this.posX>=windowWidth-27 || this.posY<=27 || this.posY>=windowHeight-27){
      let index = flying_bullets.indexOf(this);
      flying_bullets.splice(index, 1);
    }
    this.posX += (this.persec[0] * 3);
    this.posY += (this.persec[1] * 3);
  };

  this.display = function() {
    push()
    translate(this.posX, this.posY);
    rotate(this.angle);
    imageMode(CENTER);
    image(scatter_bullet_png, 0, 0);
    pop()
  };
}

function laser_bullets(x, y, rotation, number){

  this.angle = TWO_PI*rotation/360.0;
  this.persec = [sin(this.angle), -cos(this.angle)];

  this.posX = x + this.persec[0]*19;
  this.posY = y + this.persec[1]*19;

  this.lastX = this.posX;
  this.lastY = this.posY;

  while(this.lastX>=0 && this.lastX<=windowWidth && this.lastY>=0 && this.lastY<=windowHeight){
    this.lastX += this.persec[0]*20;
    this.lastY += this.persec[1]*20;
  }

  this.time_running = (this.lastX - this.posX)/this.persec[0];

  this.line_function = [-this.persec[1], this.persec[0], -this.persec[1]*(-this.posX) + this.persec[0]*(-this.posY)];

  this.player_shot = number;

  this.lasting_time = 0;

  this.update = function() {
    for(let mine of mines){
      if(Math.abs(this.line_function[0]*mine.posX+this.line_function[1]*mine.posY+this.line_function[2])<=27
        && Math.abs(mine.posX-this.posX)>=Math.abs(mine.posX-this.posX-this.persec[0])
        && Math.abs(mine.posY-this.posY)>=Math.abs(mine.posY-this.posY-this.persec[1]))
        mine.triggered = true;
    }
    for(let player of players){
      if(player.state<=2 && player.order != this.player_shot && Math.abs(this.line_function[0]*player.posX+this.line_function[1]*player.posY+this.line_function[2])<=27
      && Math.abs(player.posX-this.posX)>=Math.abs(player.posX-this.posX-this.persec[0])
      && Math.abs(player.posY-this.posY)>=Math.abs(player.posY-this.posY-this.persec[1])){
        player.state = 3;
        if(player.state==3){
          player_score[this.player_shot]++;
          if(player.type_special_ammo!="normal"){
            dropout_power(player.posX, player.posY, player.type_special_ammo);
            player.type_special_ammo = "normal";
          }
        }
      }
    }
    this.lasting_time++;
    if (this.lasting_time>12){
      let index = flying_bullets.indexOf(this);
      flying_bullets.splice(index, 1);
    }
  };

  this.display = function() {
    for(let i=0;i<this.time_running;i+=7){
      push()
      translate(this.posX+i*this.persec[0], this.posY+i*this.persec[1]);
      rotate(this.angle);
      imageMode(CENTER);
      image(laser_bullet_png, 0, 0);
      pop()
    }
  };
}

// function rocket_bullets(time_passed){
//   this.posX = x;
//   this.posY = y;
//   this.mouse = [mouseX-x, mouseY-y];
//   let length = len(mouseX, mouseY, x, y);
//   this.persec = [(mouseX-x)*2/length, (mouseY-y)*2/length];
//   this.timestart = time_passed;
//   this.update = function(time_passed) {
//     let hit = false;
//     for(let zombie of hordes){
//       if(len(zombie.posX, zombie.posY, this.posX, this.posY)<26.97)
//         hit = true;
//     }
//     if (time_passed-this.timestart>2||hit){
//       push()
//       fill(255, 0, 0);
//       circle(this.posX, this.posY, 50);
//       pop()
//       for(let zombie of hordes){
//         if(len(zombie.posX, zombie.posY, this.posX, this.posY)<50)
//           zombie.present_health -= 5000;
//       }
//       let index = flying_bullets.indexOf(this);
//       flying_bullets.splice(index, 1);
//     }
//     // this.posX += this.persec[0];
//     // this.posY += this.persec[1];
//   };
//   this.display = function() {
//     push()
//     translate(this.posX, this.posY);
//     rotate(atan2(this.mouse[1], this.mouse[0]));
//     imageMode(CORNERS);
//     image(rocket_bullet_gif, -87, 12, 12, -12);
//     pop()
//   };
// }