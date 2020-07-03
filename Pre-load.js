let normal_bullet_png, mine_bullet_png, scatter_bullet_png, laser_bullet_png;
let boosts_png = [];
let reverse_png, mine_png, scatter_png, laser_png;

let game_Music;

let pew_Sound, explosion_Sound, laser_Sound, scatting_Sound;

let all_Ships = [[], [], [], []];

let game_Font;

function preload(){   // Lấy hình ảnh và kiểu chữ từ assets

  game_Font = loadFont("assets/press-start-2p-font/PressStart2P-vaV7.ttf"); 

  normal_bullet_png = loadImage("assets/normal_bullet.png")
  mine_bullet_png = loadImage("assets/mine_bullet.png")
  scatter_bullet_png = loadImage("assets/scatter_bullet.png")
  laser_bullet_png = loadImage("assets/laser_bullet.png")

  reverse_png = loadImage("assets/Power_ups/reverse_power_up.png")
  mine_png = loadImage("assets/Power_ups/mine_power_up.png")
  scatter_png = loadImage("assets/Power_ups/scatter_power_up.png")
  laser_png = loadImage("assets/Power_ups/laser_power_up.png")

  side_cannons_png = loadImage("assets/side_cannons.png");
  boosts_png.push(loadImage("assets/boosting_0.png"));
  boosts_png.push(loadImage("assets/boosting_1.png"));

  all_Ships[0].push(loadImage("assets/Ship1/ship1_start_state.png"))
  all_Ships[0].push(loadImage("assets/Ship1/ship1_damage_state.png"))
  all_Ships[0].push(loadImage("assets/Ship1/ship1_no_ship_state.png"))

  all_Ships[1].push(loadImage("assets/Ship2/ship2_start_state.png"))
  all_Ships[1].push(loadImage("assets/Ship2/ship2_damage_state.png"))
  all_Ships[1].push(loadImage("assets/Ship2/ship2_no_ship_state.png"))

  all_Ships[2].push(loadImage("assets/Ship3/ship3_start_state.png"))
  all_Ships[2].push(loadImage("assets/Ship3/ship3_damage_state.png"))
  all_Ships[2].push(loadImage("assets/Ship3/ship3_no_ship_state.png"))

  all_Ships[3].push(loadImage("assets/Ship4/ship4_start_state.png"))
  all_Ships[3].push(loadImage("assets/Ship4/ship4_damage_state.png"))
  all_Ships[3].push(loadImage("assets/Ship4/ship4_no_ship_state.png"))

  pew_Sound = loadSound("assets/pew_sound.mp3");
  explosion_Sound = 0;
  laser_Sound = 0;
  scatting_Sound = 0;

  game_Music = 0;
}