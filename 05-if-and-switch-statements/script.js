//01) Spot the errors and fix them

const size = 25;
let result;

if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

//02) oddEven function
function oddEven(number) {
  if (number % 2 === 0) {
    return "The " + number + " is even";
  } else {
    return "The " + number + " is odd";
  }
}

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

//03) oldYoung function
function oldYoung(age) {
  if (age >= 0) {
    if (age < 16) {
      return "children";
    } else if (age < 50) {
      return "young person";
    } else {
      return "elder person";
    }
  } else {
    return "invalid parameter";
  }
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
console.log(oldYoung("Max"));
