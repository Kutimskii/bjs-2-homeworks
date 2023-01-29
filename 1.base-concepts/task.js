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
  if (typeof(percent) === "string") {
    percent = +percent;
  } else if (typeof(contribution) === "string") {
    contribution = +contribution;
  } else if (typeof(amount) === "string") {
    amount = +amount;
  } else if (typeof(countMonths) === "string") {
    countMonths = +countMonths;
  }
  if (isNaN(percent)|| isNaN(contribution) || isNaN(amount
  ) || isNaN(countMonths)) {
    return false;
  }
  let P = percent/100/12;
  let S = amount - contribution;
  let payment = S * (P + (P / (((1 + P)**countMonths) - 1)));
  let sum = +(payment*countMonths).toFixed(2);
  return sum;
}