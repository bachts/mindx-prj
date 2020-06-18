function reverse_power(x, y){

  this.posX = x;
  this.posY = y;

  this.rotation = 0;

  this.update = function(){
    for(let player of players){
      if(player.state<=1 && len(player.posX, player.posY, this.posX, this.posY)<=18){
        reverse_state = ((reverse_state) ? 0 : 1);
        let index = power_ups.indexOf(this);
        power_ups.splice(index, 1);
      }
    }

    this.rotation++;
    if(this.rotation==360)
      this.rotation = 0;
  }

  this.display = function(){
    push()
    translate(this.posX, this.posY);
    angleMode(DEGREES);
    rotate(this.rotation);
    angleMode(RADIANS);
    imageMode(CENTER);
    image(reverse_png, 0, 0);
    pop()
  }
}

function mine_power(x, y){

  this.posX = x;
  this.posY = y;

  this.rotation = 0;

  this.update = function(){
    for(let player of players){
      if(player.state<=1 && len(player.posX, player.posY, this.posX, this.posY)<=18){
        player.special_ammo = 3;
        player.type_special_ammo = "mine";
        let index = power_ups.indexOf(this);
        power_ups.splice(index, 1);
      }
    }

    this.rotation++;
    if(this.rotation==360)
      this.rotation = 0;
  }

  this.display = function(){
    push()
    translate(this.posX, this.posY);
    angleMode(DEGREES);
    rotate(this.rotation);
    angleMode(RADIANS);
    imageMode(CENTER);
    image(mine_png, 0, 0);
    pop()
  }
}

function scatter_power(x, y){

  this.posX = x;
  this.posY = y;

  this.rotation = 0;

  this.update = function(){
    for(let player of players){
      if(player.state<=1 && len(player.posX, player.posY, this.posX, this.posY)<=18){
        player.special_ammo = 3;
        player.type_special_ammo = "scatter";
        let index = power_ups.indexOf(this);
        power_ups.splice(index, 1);
      }
    }

    this.rotation++;
    if(this.rotation==360)
      this.rotation = 0;
  }

  this.display = function(){
    push()
    translate(this.posX, this.posY);
    angleMode(DEGREES);
    rotate(this.rotation);
    angleMode(RADIANS);
    imageMode(CENTER);
    image(scatter_png, 0, 0);
    pop()
  }
}

function laser_power(x, y){

  this.posX = x;
  this.posY = y;

  this.rotation = 0;

  this.update = function(){
    for(let player of players){
      if(player.state<=1 && len(player.posX, player.posY, this.posX, this.posY)<=18){
        player.special_ammo = 3;
        player.type_special_ammo = "laser";
        let index = power_ups.indexOf(this);
        power_ups.splice(index, 1);
      }
    }

    this.rotation++;
    if(this.rotation==360)
      this.rotation = 0;
  }

  this.display = function(time_passed){
    push()
    translate(this.posX, this.posY);
    angleMode(DEGREES);
    rotate(this.rotation);
    angleMode(RADIANS);
    imageMode(CENTER);
    image(laser_png, 0, 0);
    pop()
  }
}

function dropout_power(x, y, type){
  if(type=="mine")
    power_ups.push(new mine_power(x, y));
  else if(type=="scatter")
    power_ups.push(new scatter_power(x, y));
  else if(type=="laser")
    power_ups.push(new laser_power(x, y));
}

function new_random_power_spawn(x, y){
  power_ups.push(random([new reverse_power(x, y), new mine_power(x, y), new scatter_power(x, y), new laser_power(x, y)]));
}