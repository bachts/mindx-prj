let x = 10, y = 10, flag = true;
let canvasWidth = 400;
let canvasHeight = 400;

let arr = [], ammo = 30;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(60);
  noStroke();
}

function draw() {
  background(220);
  let t = frameCount / 60.0;
  keyPressed()
  push()
  fill(0, 206, 209);
  translate(x, y);
  circle(0, 0, 20);
  pop()
  if(!flag){
    push()
    fill(0, 206, 209);
    text("reloading", x-23, y-20);
    ammo++;
    if (ammo===30){
      flag = true;
      ammo = 30
    }
    pop()
  }
  if (mouseIsPressed){
    if (mouseButton==LEFT&&ammo>0&&flag){
      arr.push(new bullets(t));
      ammo--;
      if (ammo===0)
        flag = false;
    }
  }
  for(let bullet of arr){
    bullet.update(t);
    bullet.display();
  }
  text("Bullets: " + ((flag==true) ? ammo : 0) + "/30", 10, 20)
}
function keyPressed(){
  if (keyIsPressed){
    if(keyIsDown(65))
      x-=1.5;
    if(keyIsDown(83))
      y+=1.5;
    if(keyIsDown(87))
      y-=1.5;
    if(keyIsDown(68))
      x+=1.5;
  }
}
function bullets(t){
  this.posX = x;
  this.posY = y;
  let length = Math.sqrt(Math.pow(mouseX-x, 2) + Math.pow(mouseY-y, 2));
  this.persec = [(mouseX-x)*8/length + random(-1, 0, 1), (mouseY-y)*8/length + random(-1, 0, 1)];
  this.timestart = t;
  this.update = function(t) {
    this.posX += this.persec[0];
    this.posY += this.persec[1];
    if (this.posY>canvasWidth||this.posY<0||this.posX>canvasHeight||this.posX<0||t-this.timestart>0.3){
      let index = arr.indexOf(this);
      arr.splice(index, 1);
    }
  };
  this.display = function() {
    push()
    fill(0);
    ellipse(this.posX, this.posY, 3);
    pop()
  };
}