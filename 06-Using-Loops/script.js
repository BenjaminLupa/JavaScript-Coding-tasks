//01) oddNumbers function
// TODO: Implement the oddNumbers function

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

function oddNumbers(number1, number2) {
  let result = "";
  if (number1 < 0 || number2 < 0) {
    return "number not allowed";
  }
  for (let index = number1; index <= number2; index++) {
    if (index % 2 !== 0) {
      if (result === "") {
        result = index;
      } else {
        result += "," + index;
      }
    }
  }
  return result;
}

//02) charCount function
// TODO: Implement the charCount function

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3

function charCount(word, letter) {
  let counter = 0;
  if (letter.length !== 1) {
    return;
  } else {
    for (let index = 0; index < word.length; index++) {
      if (word[index].toUpperCase() === letter.toUpperCase()) {
        counter++;
      }
    }
  }
  return counter;
}
