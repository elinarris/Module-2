const numArr = [3, 1, 0, 6, 22, 16, 8, 2];
const stringArr = [
  "wonderful",
  "love",
  "million",
  "Jesus",
  "light",
  "chic",
  "you",
];
const peopleObj = [
  { name: "Jason", age: 7, member: false },
  { name: "Jubilee", age: 50, member: true },
  { name: "Lily", age: 12, member: true },
  { name: "Yoshi", age: 24, member: true },
];

// five and greater
function fiveAndGreater(arr) {
  return arr.filter((num) => num > 5);
}

console.log(fiveAndGreater(numArr));

// even numbers

function onlyEvens(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log(onlyEvens(numArr));

// 5 characters or fewer in a string

function fiveOrLess(arr) {
  return arr.filter((string) => string.length <= 5);
}

console.log(fiveOrLess(stringArr));

// who belong in club

function members(membs) { return membs.filter( mem => mem.member === true) };

console.log(members(peopleObj));

// old enough to see Matrix (18+)

function oldEnoughToSeeMatrix(persons) { return persons.filter(pers => pers.age >= 18 ) };

console.log(oldEnoughToSeeMatrix(peopleObj));
