function player3(){

  this.posX = 30;
  this.posY = game_Height-30;

  this.rotation = 0;
  let angle = TWO_PI*this.rotation/360.0;
  this.persec = [sin(angle), -cos(angle)];

  this.state = 0;
  this.time_out_of_ship = 0;

  this.ammo_rotation = 0;
  this.normal_ammo = 3;
  this.special_ammo = 0;
  this.reload = 0;
  this.type_special_ammo = "normal"

  this.order = 2;

  this.knockback = 0;

  this.release_time = 0;
  this.press_twice_ready = false;
  this.dashed = false;
  this.boosting = 0;

  this.update = function(){

    if(keyIsPressed){
      if(keyIsDown(74)){
        if(this.press_twice_ready&&this.release_time<=12&&!this.dashed){
          if(!reverse_state)
            this.rotation = ((this.rotation+60>360) ? this.rotation+60-360 : this.rotation+60);
          else
            this.rotation = ((this.rotation-60<0) ? this.rotation-60+360 : this.rotation-60);
          let angle = TWO_PI*this.rotation/360.0;
          this.persec = [sin(angle), -cos(angle)];
          if(!this.boosting)
            this.boosting = 480;
          this.posX = Math.min(Math.max(this.posX+this.persec[0]*12, 30), game_Width-30);
          this.posY = Math.min(Math.max(this.posY+this.persec[1]*12, 30), game_Height-30);
          this.dashed = true;
        }
        else if(!reverse_state)
          this.rotation = ((this.rotation+3>360) ? this.rotation+3-360 : this.rotation+3);
        else
          this.rotation = ((this.rotation-3<0) ? this.rotation-3+360 : this.rotation-3);
        let angle = TWO_PI*this.rotation/360.0;
        this.persec = [sin(angle), -cos(angle)];
      }
      if(keyIsDown(75)&&this.state==2){
        this.posX = Math.min(Math.max(this.posX+this.persec[0]*1.5, 30), game_Width-30);
        this.posY = Math.min(Math.max(this.posY+this.persec[1]*1.5, 30), game_Height-30);
      }
    }

    if(this.state<=1&&this.press_twice_ready)
      this.release_time++;
    
    if(this.boosting)
      this.boosting--;

    if(this.state<=1&&!this.knockback){
      this.posX = Math.min(Math.max(this.posX+this.persec[0]*1.5*((this.boosting)? 2 : 1 ), 30), game_Width-30);
      this.posY = Math.min(Math.max(this.posY+this.persec[1]*1.5*((this.boosting)? 2 : 1 ), 30), game_Height-30);
    }
    else if(this.knockback){
      this.posX = Math.min(Math.max(this.posX-this.persec[0]*1.5*((this.boosting)? 2 : 1 ), 30), game_Width-30);
      this.posY = Math.min(Math.max(this.posY-this.persec[1]*1.5*((this.boosting)? 2 : 1 ), 30), game_Height-30);
      this.knockback--;
    }

    if(this.normal_ammo<3)
      this.reload++;
    if(this.reload==90){
      this.normal_ammo++;
      this.reload = 0;
    }

    if(this.state==2){
      this.time_out_of_ship++;
      if(this.time_out_of_ship==360){
        this.state = 1;
        this.time_out_of_ship = 0;
      }
    }

    this.ammo_rotation++;
    if(this.ammo_rotation==360)
      this.ammo_rotation = 0;
  }

  this.display_ship = function(){
    push()
    translate(this.posX-cameraX, this.posY-cameraY);
    rotate(TWO_PI*this.rotation/360.0);
    imageMode(CENTER);
    image(ship3[this.state], 0, 0);
    pop()
  }

  this.display_ammo = function(){
    if(this.state<=1){
      push()
      fill(255);
      translate(this.posX-cameraX, this.posY-cameraY);
      angleMode(DEGREES);
      rotate(this.ammo_rotation);
      angleMode(RADIANS);
      for(let i=0;i<=this.normal_ammo-1;i++){
        rotate(TWO_PI/3.0);
        square(25, -2.5, 5);
      }
      pop()
    }
  }
}