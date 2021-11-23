
let sketchWidth = 400;
let sketchHight = 400;
let x1 = 10;
let x2 = 10;

function setup() {
  createCanvas(sketchWidth, sketchHight);
}

function draw() {
  background(255);

  for (let c = 1; c < 100; c++) {
    strokeWeight(c/10);
    stroke('black');
    noFill();
    ellipseMode(CENTER);
    arc(sketchWidth/2, sketchHight/2, x1*c, x2*c, c*QUARTER_PI, HALF_PI*c);
  }
  noLoop();
  save();
}
