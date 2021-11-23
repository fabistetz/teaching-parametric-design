let sketchWidth = 400;
let sketchHight = 400;
let x1 = 0;
let y1 = 200;
let x2 = 10;
let y2 = 0;
let g = 10;
let s = 2;

function setup() {
  createCanvas(sketchWidth, sketchHight, SVG);
}

function draw() {
  background(255);
  
  for (let a = 0; a < 21; a++) {
    stroke('red');
    strokeWeight(s-0.1*a);
    line(
      x1,
      y1-g*a, 
      x2+g*a, 
      y2);
    line(
      2*y1,
      y1+g*a, 
      x2+g*a, 
      y2);
    line(
      x1+sketchWidth,
      y1+g*a,
      (x2+sketchWidth/2)+g*a,
      (sketchHight/2)+g*a);
  }
  
  
  for (let b = 1; b < 20; b++) {
    strokeWeight(b/10);
    stroke('black');
    noFill();
    arc(sketchWidth/4, sketchHight/2, 10*b, 10*b, b*QUARTER_PI, PI);
  }
  noLoop();
  save();
}
