//01) Greet function
// TODO: implement welcomeMsg function

console.log(welcomeMsg("Jane"));
// Welcome Jane!

console.log(welcomeMsg("Marc"));
// Welcome Marc!

function welcomeMsg(name) {
  return "Welcome " + name + "!";
}
//return`Welcome ${name}!`;

//02) Gross Price Function
// TODO: implement calcGrossPrice function

console.log(calcGrossPrice(20, 0.19));
// result should be 23.8

console.log(calcGrossPrice(40, 0.16));
// result should be 46.4

function calcGrossPrice(netprice, taxrate) {
  let gross_price = netprice * (taxrate + 1);
  gross_price = gross_price.toFixed(1);
  return gross_price;
}

//03) Add Positive Function
// TODO: Implement the addPositive function

console.log(addPositive(2, 3));
// result1 should be 5

console.log(addPositive(3, -5));
// result2 should be 8

console.log(addPositive(-1, -8));
// result2 should be 9

function addPositive(number1, number2) {
  return Math.abs(number1) + Math.abs(number2);
}
