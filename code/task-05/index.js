const jscad = require('@jscad/modeling')
const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;

let r = 3;
let h = 100;
let s = 6;
let c = [0, 0, 0];

const main = () => {
  const hexShape = cylinder({
    radius: r,
    height: h,
    segments: s,
    center: c
  });

  const hexWall = [];
  for (let a = 0; a < 9; a++) {
    hexWall.push(
      translate([0, Math.sqrt(3) * r * a, 0],
      hexShape
    ))
  };

  const hexPlain = [];
  for (let b = 0; b < 9; b++) {
    hexPlain.push(
      translate([1.5 * r * b, Math.sqrt(3) * r / 2 * b, 0],
      hexWall
    ))
  };

  const ball = sphere({
    radius: 40,
    center: [0, 0, 0],
    segments: 36
  });

  const unionShape = subtract([hexPlain, ball]);

  // unkown Problem: won't show unionShape
  // other Shapes work fine

  return unionShape;
};

module.exports = { main };