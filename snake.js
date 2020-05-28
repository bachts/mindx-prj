function setup() {
    createCanvas(1920, 1080);
   frameRate(30);
}  
let pos_x = 960;
let pos_y = 540;
let v_x,v_y;
function draw() {
    let ran_x = Math.random();
    let ran_y = Math.random();  

    if(ran_x < 0.5)
    v_x = Math.random()*100;
    else v_x = -Math.random()*100
    if(ran_y < 0.5)
    v_y = Math.random()*100;
    else v_y = -Math.random()*100;
    line(pox_x,pos_x + v_x, pos_y, pos_y + v_y)
    pos_x += v_x;
    pos_y += v_y;
}