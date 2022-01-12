let sketchWidth = 800;
let sketchHight = 400;

let slider; 

// blade shape 01

// var lower ricasso
let x1lr = 400;
let y1lr = 200;
let x2lr = 380;
let y2lr = 200;

// var heel
let x1h = 360;
let y1h = 240;
let x2h = 360;
let y2h = 200;
let x3h = 300;
let y3h = 240;

// var tip
let x1t = 100;
let y1t = 200;
let x2t = 110;
let y2t = 210;
let x3t = 120;
let y3t = 185;

// var upper tip
let x1ut = 140;
let y1ut = 170;
let x2ut = 120;
let y2ut = 185;
let x3ut = 180;
let y3ut = 170;

// var upper ricasso
let x1ur = 400;
let y1ur = 170;
let x2ur = 360;
let y2ur = 170;

function setup() {
  createCanvas(sketchWidth, sketchHight);

  slider = createSlider(-50, 50, 0, 1);
  slider.position(10, 10);
  slider.style('width', '100px');
}

function draw() {
  background(200);
  
  let sliderBladelength = slider.value();


  noFill();
  stroke(1);
  strokeWeight(2);
  beginShape();
  // lower ricasso to heel
  bezier(
    x1lr, y1lr, 
    x2lr, y2lr, 
    x2h, y2h, 
    x1h, y1h);
  // heel to tip (edge)
  bezier(
    x1h, y1h, 
    x3h, y3h, 
    x2t + sliderBladelength, y2t, 
    x1t + sliderBladelength, y1t);
  // tip to upper tip
  bezier(
    x1t + sliderBladelength, y1t, 
    x3t + sliderBladelength, y3t, 
    x2ut + sliderBladelength, y2ut, 
    x1ut + sliderBladelength, y1ut);
  // upper tip to upper ricasso
  bezier(
    x1ut + sliderBladelength, y1ut, 
    x3ut + sliderBladelength, y3ut, 
    x2ur, y2ur, 
    x1ur, y1ur);
  endShape();
}
