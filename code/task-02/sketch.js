function setup(){
  createCanvas(400,400);
}

function draw(){
  background(200);
  
  fill('white')
  for (let b = 0; b < 5; b += 1) {
    circle(30 + 85 * b, 280, 25);
  }

  fill('white')
  for (let c = 0; c < 5; c += 1) {
    circle(30 + 75 * c, 280 - 50 * c, 25);
  }

  fill('black')
  for (let a = 0; a < 7; a += 1) {
    rect(20 + 50 * a, 20 + 50 * a, 20, 20);  
  }

}