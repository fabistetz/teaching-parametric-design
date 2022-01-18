let sketchWidth = 800;
let sketchHeight = 400;

let radioBladepreset,
    radioHandlepreset;

let sliderBladelength, 
    sliderBladecurve, 
    sliderTiphight, 
    sliderHeelheight, 
    sliderTiplength,
    sliderHeellength; 

let sliderHandlelength,
    sliderHandleheight,
    sliderBolster;


function setup() {
  createCanvas(sketchWidth, sketchHeight);
  textSize(30);
  textAlign(CENTER, CENTER);

  radioBladepreset = createRadio();
  radioBladepreset.option('Gyuto');
  radioBladepreset.option('Santoku');
  radioBladepreset.option('Nakiri');
  radioBladepreset.option('Kiritsuke');
  radioBladepreset.option('Petty');
  radioBladepreset.style('width', '800px');
  radioBladepreset.position(10, 80);
  radioBladepreset.selected('Gyuto');
  radioBladepreset.attribute('name', 'first');

  radioHandlepreset = createRadio();
  radioHandlepreset.option('Wa-Oval');
  radioHandlepreset.option('Wa-Octagonal');
  radioHandlepreset.option('Wa-Shinogi');
  radioHandlepreset.option('Wa-Hinoura');
  radioHandlepreset.style('width', '800px');
  radioHandlepreset.position(400, 80);
  radioHandlepreset.selected('Wa-Oval');
  radioHandlepreset.attribute('name', 'second');


  sliderBladelength = createSlider(-50, 50, 0, 1);
  sliderBladelength.position(35, 120);
  sliderBladelength.style('width', '120px');
  sliderBladelength.style('background-color', 255);

  sliderBladecurve = createSlider(-50, 50, 0, 1);
  sliderBladecurve.position(150, 280);
  sliderBladecurve.style('width', '100px');

  sliderTiphight = createSlider(-10, 10, 0, 0.1);
  sliderTiphight.position(5, 190);
  sliderTiphight.style('width', '50px');
  sliderTiphight.style("transform", "rotate(-90deg)");

  sliderHeelhight = createSlider(-10, 10, 0, 0.1);
  sliderHeelhight.position(690, 230);
  sliderHeelhight.style('width', '50px');
  sliderHeelhight.style("transform", "rotate(-90deg)");

  sliderTiplength = createSlider(-30, 30, 0, 1);
  sliderTiplength.position(200, 120);
  sliderTiplength.style('width', '100px');

  sliderHeellength = createSlider(0, 24, 12, 0.1);
  sliderHeellength.position(345, 280);
  sliderHeellength.style('width', '50px');


  sliderHandlelength = createSlider(-20, 60, 20, 1);
  sliderHandlelength.position(520, 120);
  sliderHandlelength.style('width', '100px');

  sliderHandleheight = createSlider(0, 5, 2.5, 0.1);
  sliderHandleheight.position(690, 175);
  sliderHandleheight.style('width', '50px');
  sliderHandleheight.style("transform", "rotate(-90deg)");

  sliderBolster = createSlider(0, 50, 25, 1);
  sliderBolster.position(400, 120);
  sliderBolster.style('width', '50px');
}

function draw() {
  background(200);
  
  for (var x = 0; x < sketchWidth; x += sketchWidth / 80) {
		for (var y = 0; y < sketchHeight; y += sketchHeight / 40) {
			stroke(150, 50);
			strokeWeight(0.1);
			line(x, 0, x, sketchHeight);
			line(0, y, sketchWidth, y);
		};
  };
  for (var x = 0; x < sketchWidth; x += sketchWidth / 16) {
		for (var y = 0; y < sketchHeight; y += sketchHeight / 8) {
			stroke(150, 50);
			strokeWeight(0.5);
			line(x, 0, x, sketchHeight);
			line(0, y, sketchWidth, y);
		};
  };
  for (var x = 0; x < sketchWidth; x += sketchWidth / 8) {
		for (var y = 0; y < sketchHeight; y += sketchHeight / 4) {
			stroke(150, 50);
			strokeWeight(1);
			line(x, 0, x, sketchHeight);
			line(0, y, sketchWidth, y);
		};
  };


  fill(0);
  stroke(0);
  strokeWeight(1);
  text("kniveGen-2D", sketchWidth / 2, 40);
  
  fill(160);
  stroke(0);
  strokeWeight(2);

  let bladelength = sliderBladelength.value();
  let bladecurve = sliderBladecurve.value() * -1;
  let tiphight = sliderTiphight.value() * -1;
  let heelhight = sliderHeelhight.value() * -1;
  let tiplength = sliderTiplength.value();
  let heellength = sliderHeellength.value();

  let handlelength = sliderHandlelength.value();
  let handlehight = sliderHandleheight.value();
  let bolster = sliderBolster.value();

  if (radioBladepreset.value() === 'Gyuto'){
  
    // var lower ricasso
    let x1lr = 400;
    let y1lr = 200;
    let x2lr = 380;
    let y2lr = 200;

    // var heel
    let x1h = 360;
    let y1h = 235;
    let x2h = 360;
    let y2h = 200;
    let x3h = 300;
    let y3h = 235;

    // var tip
    let x1t = 100;
    let y1t = 205;
    let x2t = 130;
    let y2t = 220;
    let x3t = 130;
    let y3t = 170;

    // var upper tip
    let x1ut = 300;
    let y1ut = 170;
    let x2ut = 220;
    let y2ut = 170;
    let x3ut = 180;
    let y3ut = 170;

    // var upper ricasso
    let x1ur = 400;
    let y1ur = 170;
    let x2ur = 360;
    let y2ur = 170;

    beginShape();
    // lower ricasso
    vertex(
      x1lr, y1lr);
    // lower ricasso to heel
      bezierVertex(
      x2lr, y2lr, 
      x2h + heellength, y2h, 
      x1h + heellength, y1h + heelhight);
    // heel to tip (edge)
    bezierVertex(
      x3h - bladecurve, y3h + heelhight, 
      x2t + bladelength, y2t + (0.8 * tiphight), 
      x1t + bladelength, y1t + (0.8 * tiphight));
    // tip to upper tip
    bezierVertex( 
      x3t + bladelength, y3t + (0.8 * tiphight), 
      x2ut + bladelength, y2ut, 
      x1ut + bladelength + (1.5 * tiplength), y1ut);
    // upper tip
    vertex(x1ut + bladelength + (1.5 * tiplength), y1ut);
    // upper ricasso
    vertex(x1ur, y1ur);
    endShape(CLOSE);
  }
  if (radioBladepreset.value() === 'Santoku'){
  
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
    let y1t = 215;
    let x2t = 110;
    let y2t = 225;
    let x3t = 120;
    let y3t = 170;

    // var upper tip
    let x1ut = 300;
    let y1ut = 170;
    let x2ut = 120;
    let y2ut = 170;
    let x3ut = 180;
    let y3ut = 170;

    // var upper ricasso
    let x1ur = 400;
    let y1ur = 170;
    let x2ur = 360;
    let y2ur = 170;

    beginShape();
    // lower ricasso
    vertex(
      x1lr, y1lr);
    // lower ricasso to heel
    bezierVertex(
      x2lr, y2lr, 
      x2h + heellength, y2h, 
      x1h + heellength, y1h + heelhight);
    // heel to tip (edge)
    bezierVertex(
      x3h - bladecurve, y3h + heelhight,
      x2t + bladelength, y2t + tiphight,
      x1t + bladelength, y1t + tiphight);
    // tip to upper tip
    bezierVertex(
      x3t + bladelength + (0.5 * tiplength), y3t + tiphight, 
      x2ut + bladelength, y2ut, 
      x1ut + bladelength + tiplength, y1ut);
    // upper tip
    vertex(x1ut + bladelength + tiplength, y1ut);
    // upper ricasso
    vertex(x1ur, y1ur);
    endShape(CLOSE);
  }
  if (radioBladepreset.value() === 'Nakiri'){
  
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
    let y1t = 220;
    let x2t = 100;
    let y2t = 240;
    let x3t = 120;
    let y3t = 185;
  
    // var upper tip
    let x1ut = 100;
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
  
    beginShape();
    // lower ricasso
    vertex(
      x1lr, y1lr)
    // lower ricasso to heel
      bezierVertex( 
      x2lr, y2lr, 
      x2h + heellength, y2h, 
      x1h + (1.2 * heellength), y1h + heelhight);
    // heel to tip (edge)
    bezierVertex(
      x3h - bladecurve, y3h + heelhight,
      x2t + bladelength, y2t + tiphight,
      x1t + bladelength, y1t + tiphight + heelhight);
    // tip
      vertex(x1t + bladelength, y1t + tiphight + heelhight);
    // upper tip
      vertex(x1ut + bladelength + (0.5 * tiplength), y1ut);
    // upper ricasso
      vertex(x1ur, y1ur);
    endShape(CLOSE);
  }
  if (radioBladepreset.value() === 'Kiritsuke'){
  
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
    let y2t = 205;
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

    beginShape();
    // lower ricasso
    vertex(
      x1lr, y1lr);
    // lower ricasso to heel
    bezierVertex(
      x2lr, y2lr,
      x2h + heellength, y2h,
      x1h + (1.1 * heellength), y1h + heelhight);
    // heel to tip
    bezierVertex(
      x3h - bladecurve, y3h + heelhight,
      x2t + bladelength, y2t + tiphight,
      x1t + bladelength, y1t + tiphight);
    // tip
      vertex(x1t + bladelength, y1t + tiphight);
    // upper tip
      vertex(x1ut + bladelength + tiplength, y1ut);
    // upper ricasso
      vertex(x1ur, y1ur);
    endShape(CLOSE);
  }
  if (radioBladepreset.value() === 'Petty'){
  
    // var lower ricasso
    let x1lr = 400;
    let y1lr = 200;
    let x2lr = 390;
    let y2lr = 200;

    // var heel
    let x1h = 385;
    let y1h = 210;
    let x2h = 385;
    let y2h = 200;
    let x3h = 340;
    let y3h = 210;

    // var tip
    let x1t = 200;
    let y1t = 180;
    let x2t = 220;
    let y2t = 210;
    let x3t = 240;
    let y3t = 170;

    // var upper tip
    let x1ut = 350;
    let y1ut = 170;
    let x2ut = 240;
    let y2ut = 170;
    let x3ut = 180;
    let y3ut = 170;

    // var upper ricasso
    let x1ur = 400;
    let y1ur = 170;
    let x2ur = 360;
    let y2ur = 170;

    beginShape();
    // lower ricasso
    vertex(
      x1lr, y1lr);
    // lower ricasso to heel
    bezierVertex( 
      x2lr + (0.5 * heellength), y2lr, 
      x2h + (0.5 * heellength), y2h, 
      x1h + (0.5 * heellength), y1h + (0.3 * heelhight));
    // heel to tip (edge)
    bezierVertex( 
      x3h - bladecurve, y3h + (0.3 * heelhight), 
      x2t + bladelength, y2t + tiphight, 
      x1t + bladelength, y1t + tiphight);
    // tip to ricasso
    bezierVertex(
      x3t + bladelength + tiplength, y3t + tiphight, 
      x2ut + bladelength + tiplength, y2ut, 
      x1ur, y1ur);
    endShape(CLOSE);
  }


  if (radioHandlepreset.value() === 'Wa-Oval'){

    // var upper ricasso handle
    let x1 = 400;
    let y1 = 170;
    // var upper end
    let x2 = 550;
    let y2 = 170;
    // var lower end
    let x3 = 550;
    let y3 = 200
    // var lower ricasso handle
    let x4 = 400;
    let y4 = 200;

    // handle 
    fill(100);
    beginShape();
    vertex(x1, y1 - handlehight);
    vertex(x2 + handlelength, y2 - handlehight);
    vertex(x3 + handlelength, y3 + handlehight);
    vertex(x4, y4 + handlehight);
    vertex(x1, y1 - handlehight);
    endShape(CLOSE);

    // bolster
    fill(30, 50);
    beginShape();
    vertex(x1, y1 - handlehight);
    vertex(x1 + bolster, y2 - handlehight);
    vertex(x1 + bolster, y3 + handlehight);
    vertex(x1, y4 + handlehight);
    vertex(x1, y1 - handlehight);
    endShape(CLOSE);
  }
  if (radioHandlepreset.value() === 'Wa-Octagonal'){

    // var upper ricasso handle
    let x1 = 400;
    let y1 = 170;
    // var upper end
    let x2 = 550;
    let y2 = 170;
    // var lower end
    let x3 = 550;
    let y3 = 200
    // var lower ricasso handle
    let x4 = 400;
    let y4 = 200;
    // var oct shape
    let x5 = x1;
    let y5 = y1 + 7;
    let x6 = x2;
    let y6 = y2 + 7;
    let x7 = x3;
    let y7 = y3 - 7;
    let x8 = x4;
    let y8 = y4 - 7;

    // handle 
    fill(100);
    beginShape();
    vertex(x1, y1 - handlehight);
    vertex(x2 + handlelength, y2 - handlehight);
    vertex(x3 + handlelength, y3 + handlehight);
    vertex(x4, y4 + handlehight);
    vertex(x1, y1 - handlehight);
    endShape(CLOSE);
    beginShape();
    vertex(x5, y5 - (0.5 * handlehight));
    vertex(x6 + handlelength, y6 - (0.5 * handlehight));
    vertex(x7 + handlelength, y7 + (0.5 * handlehight));
    vertex(x8, y8 + (0.5 * handlehight));
    vertex(x5, y5 - (0.5 * handlehight));
    endShape(CLOSE);

    // bolster
    fill(30, 50);
    beginShape();
    vertex(x1, y1 - handlehight);
    vertex(x1 + bolster, y2 - handlehight);
    vertex(x1 + bolster, y3 + handlehight);
    vertex(x1, y4 + handlehight);
    vertex(x1, y1 - handlehight);
    endShape(CLOSE);
  }
  if (radioHandlepreset.value() === 'Wa-Shinogi'){

    // var upper ricasso handle
    let x1 = 400;
    let y1 = 170;
    // var upper end
    let x2 = 550;
    let y2 = 170;
    // var lower end
    let x3 = 550;
    let y3 = 200
    // var lower ricasso handle
    let x4 = 400;
    let y4 = 200;
    // var D shape
    let x5 = x1;
    let y5 = y1 + 5;
    let x6 = x1 + 15;
    let y6 = y2 + 10;
    let x7 = x3;
    let y7 = y6;
    let x8 = x4;
    let y8 = y4 - 3;

    // handle 
    fill(100);
    beginShape();
    vertex(x1, y1 - handlehight);
    vertex(x2 + handlelength, y2 - handlehight);
    vertex(x3 + handlelength, y3 + handlehight);
    vertex(x4, y4 + handlehight);
    vertex(x1, y1 - handlehight);
    endShape(CLOSE);
    beginShape();
    vertex(x5, y5 - handlehight);
    vertex(x6 + (0.6 * handlelength), y6 - handlehight);
    vertex(x7 +handlelength, y7 - handlehight);
    endShape();
    beginShape();
    vertex(x8, y8);
    vertex(x6 + (0.6 * handlelength), y6 - handlehight);
    endShape(CLOSE);

    // bolster
    fill(30, 50);
    beginShape();
    vertex(x1, y1 - handlehight);
    vertex(x1 + bolster, y2 - handlehight);
    vertex(x1 + bolster, y3 + handlehight);
    vertex(x1, y4 + handlehight);
    vertex(x1, y1 - handlehight);
    endShape(CLOSE);
  }
  if (radioHandlepreset.value() === 'Wa-Hinoura'){

    // var upper ricasso handle
    let x1 = 400;
    let y1 = 170;
    // var upper end
    let x2 = 550;
    let y2 = 170;
    // var lower end
    let x3 = 550;
    let y3 = 200
    // var lower ricasso handle
    let x4 = 400;
    let y4 = 200;
    // var oct shape
    let x5 = x1;
    let y5 = y1 + 5;
    let x6 = x2;
    let y6 = y2 + 5;
    let x7 = x3;
    let y7 = y3 - 15;
    let x8 = x4;
    let y8 = y4 - 5;

    // handle 
    fill(100);
    beginShape();
    vertex(x1, y1 - handlehight);
    vertex(x2 + handlelength, y2 - handlehight);
    vertex(x3 + handlelength, y3 + handlehight);
    vertex(x4, y4 + handlehight);
    vertex(x1, y1 - handlehight);
    endShape(CLOSE);
    beginShape();
    vertex(x5, y5 - (0.5 * handlehight));
    vertex(x6 + handlelength, y6 - (0.5 * handlehight));
    vertex(x7 + handlelength, y7 + (0.5 * handlehight));
    vertex(x8, y8 + (0.5 * handlehight));
    vertex(x5, y5 - (0.5 * handlehight));
    endShape(CLOSE);

    // bolster
    fill(30, 50);
    beginShape();
    vertex(x1, y1 - handlehight);
    vertex(x1 + bolster, y2 - handlehight);
    vertex(x1 + bolster, y3 + handlehight);
    vertex(x1, y4 + handlehight);
    vertex(x1, y1 - handlehight);
    endShape(CLOSE);
  }
}
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
// WWNNXXK0OOkkxddollc::;;,,''..''''''''''''''''''''''''''''''''''''''''''''''''''',,;;:ccllodxxkOO00KX
// kc,''.......                                                                                 ......,
// NOc.                                                                                               :
// MMWXxc'.                                                    ....                                 .lX
// MMMMMMN0xc,.                                             ,ok0KK0Oxoc;,'...                     .l0WM
// MMMMMMMMMMWXOdl:'.                                      cXMMMMMMMMMMMWNXK0OOkxxddddoooooooddddkXWMMM
// MMMMMMMMMMMMMMMWNX0kol:,...                            .kMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMWNK0kxolc:;'....                .kMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNX0Okdol:;,'.....    .xMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM