function player2(){

  this.posX = random(30, windowWidth-30);
  this.posY = random(30, windowHeight-30);

  this.rotation = 0;
  let angle = TWO_PI*this.rotation/360.0;
  this.persec = [sin(angle), -cos(angle)];

  this.state = 0;
  this.time_out_of_ship = 0;

  this.normal_ammo = 3;
  this.special_ammo = 0;
  this.reload = 0;
  this.type_special_ammo = "normal"

  this.order = 1;

  this.knockback = 0;

  this.ammo_rotation = 0;

  this.update = function(){

    if(keyIsPressed){
      if(keyIsDown(67)){
        if(!reverse_state){
          this.rotation = ((this.rotation+3>360) ? this.rotation+3-360 : this.rotation+3);
          let angle = TWO_PI*this.rotation/360.0;
          this.persec = [sin(angle), -cos(angle)];
        }
        else{
          this.rotation = ((this.rotation-3<0) ? this.rotation-3+360 : this.rotation-3);
          let angle = TWO_PI*this.rotation/360.0;
          this.persec = [sin(angle), -cos(angle)];
        }
      }
      if(keyIsDown(86)&&this.state==2){
        this.posX = Math.min(Math.max(this.posX+this.persec[0]*1.5, 30), windowWidth-30);
        this.posY = Math.min(Math.max(this.posY+this.persec[1]*1.5, 30), windowHeight-30);
      }
    }

    if(this.state<=1&&!this.knockback){
      this.posX = Math.min(Math.max(this.posX+this.persec[0]*1.5, 30), windowWidth-30);
      this.posY = Math.min(Math.max(this.posY+this.persec[1]*1.5, 30), windowHeight-30);
    } 
    else if(this.knockback){
      this.posX = Math.min(Math.max(this.posX-this.persec[0]*1.5, 30), windowWidth-30);
      this.posY = Math.min(Math.max(this.posY-this.persec[1]*1.5, 30), windowHeight-30);
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
    translate(this.posX, this.posY);
    rotate(TWO_PI*this.rotation/360.0);
    imageMode(CENTER);
    image(ship2[this.state], 0, 0);
    pop()
  }

  this.display_ammo = function(){
    if(this.state<=1){
      push()
      fill(255);
      translate(this.posX, this.posY);
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