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
  if (percent == String) {
    percent = +percent;
  } else if (contribution == String) {
    contribution = +contribution;
  } else if (amount == String) {
    amount = +amount;
  } else if (countMonths == String) {
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
  console.log (sum);
  return sum;

}
