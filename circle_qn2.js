"use strict";

var radius = 5;
const pi = 3.1416;

function circumferenceCircle(radius)
{
  let circum = 2 * pi * radius;
  console.log(" The circumference is " + circum);

  let area = pi * radius**2;
  console.log(" The area is " + area);
}

circumferenceCircle(radius);
