let normal_bullet_png, mine_bullet_png, scatter_bullet_png, laser_bullet_png;

let space_background;

let ship1 = [], ship2 = [], ship3 = [], ship4 = [];

let all_ships = [];

let reverse_png, mine_png, scatter_png, laser_png;

let game_Font;

function preload(){   // Lấy hình ảnh và kiểu chữ từ assets

  game_Font = loadFont("assets/press-start-2p-font/PressStart2P-vaV7.ttf"); 

  normal_bullet_png = loadImage("assets/normal_bullet.png")
  mine_bullet_png = loadImage("assets/mine_bullet.png")
  scatter_bullet_png = loadImage("assets/scatter_bullet.png")
  laser_bullet_png = loadImage("assets/laser_bullet.png")

  space_background = loadImage("assets/space_background.jpg")

  ship1.push(loadImage("assets/Ship1/ship1_start_state.png"))
  ship1.push(loadImage("assets/Ship1/ship1_damage_state.png"))
  ship1.push(loadImage("assets/Ship1/ship1_no_ship_state.png"))

  ship2.push(loadImage("assets/Ship2/ship2_start_state.png"))
  ship2.push(loadImage("assets/Ship2/ship2_damage_state.png"))
  ship2.push(loadImage("assets/Ship2/ship2_no_ship_state.png"))

  ship3.push(loadImage("assets/Ship3/ship3_start_state.png"))
  ship3.push(loadImage("assets/Ship3/ship3_damage_state.png"))
  ship3.push(loadImage("assets/Ship3/ship3_no_ship_state.png"))

  ship4.push(loadImage("assets/Ship4/ship4_start_state.png"))
  ship4.push(loadImage("assets/Ship4/ship4_damage_state.png"))
  ship4.push(loadImage("assets/Ship4/ship4_no_ship_state.png"))

  reverse_png = loadImage("assets/Power_ups/reverse_power_up.png")
  mine_png = loadImage("assets/Power_ups/mine_power_up.png")
  scatter_png = loadImage("assets/Power_ups/scatter_power_up.png")
  laser_png = loadImage("assets/Power_ups/laser_power_up.png")
}

all_ships.push(ship1);
all_ships.push(ship2);
all_ships.push(ship3);
all_ships.push(ship4)