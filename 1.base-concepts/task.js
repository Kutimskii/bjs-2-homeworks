"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = (b**2 - 4*a*c);
  if (d === 0) {
    let x = -b/(2*a);
    arr.push(x);
  } else if (d > 0) {
    let xOne = (-b + Math.sqrt(d) )/(2*a);
    let xTwo = (-b - Math.sqrt(d) )/(2*a);
    arr.push(xOne,xTwo);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}