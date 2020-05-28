function setup() {
    createCanvas(windowWidth, windowHeight);
   frameRate(30);
}  
let pos_x = 600;
let pos_y = 600t;
let v_x,v_y;
function draw() {
    let ran_x = Math.random();
    let ran_y = Math.random();  

    if(ran_x < 0.5)
    v_x = Math.random()*50;
    else v_x = -Math.random()*50;
    if(ran_y < 0.5)
    v_y = Math.random()*50;
    else v_y = -Math.random()*50;
    line(pos_x, pos_y, pos_x + v_x, pos_y + v_y)
    pos_x += v_x;
    pos_y += v_y;
}