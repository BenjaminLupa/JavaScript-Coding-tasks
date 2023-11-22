//01) removeItem function
// TODO: Implement the removeItem function

function removeItem(thing, number) {
  let remove = thing.slice();
  remove.splice([number - 1], [1]);
  return remove;
}
const ainmals = ["Dog", "Cat", "Lion"];
console.log(removeItem(ainmals, 1));
// result should be: ["Cat", "Lion"]

console.log(ainmals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

//03) sumOfCharacters-Funktion
// TODO: Implement the sumOfCharacters function

function sumOfCharacters(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    if (typeof arr[index] === "string") {
      sum += arr[index].length;
    }
  }
  return sum;
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55
