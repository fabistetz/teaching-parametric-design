let yPos = 0;
let r, g, b;

function setup() {
  createCanvas(400, 400);
  r = random(255);
  g = random(255);
  b = random(255);
  frameRate(30);
  loop();
}

function draw() {
  background(255);
for (let i = 0; i < 400; i++) {
  let s = random(0, 255);
  stroke(s);
  line(i, 0, i, 400);
}
  yPos = yPos -5;
  if (yPos < -10) {
    yPos = height;
    r = random(255);
    g = random(255);
    b = random(255);
  }
  fill(r, b, g);
  noStroke();
  circle(270, yPos, 50, yPos);
  circle(190, yPos -40, 40, yPos -40);
  circle(130, yPos -20, 30, yPos -20);
  circle(70, yPos -10, 60, yPos -20);
  circle(340, yPos -30, 15, yPos -30);

  textSize(34);
text('click to prevent migraine', 15, 50);
fill(r, g, b);
}

function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}
