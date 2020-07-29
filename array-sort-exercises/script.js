const numsArray = [34, 5, 8, 1, 98, 33, 67, 18, 444];
const stringArr = [
  "return",
  "you",
  "Jacob",
  "forty",
  "yesssss",
  "whale",
  "lol",
];
const objectArr = [
  { name: "Jessica", age: 56 },
  { name: "Yulia", age: 12 },
  { name: "William", age: 32 },
  { name: "Steven", age: 24 },
  { name: "Unio", age: 72 },
];

//least to greatest using .sort()
function leastToGreatest(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

console.log(leastToGreatest(numsArray));

//greatest to least using .sort()
function greatestToLeast(arr) {
  return arr.sort(function (a, b) {
    return b - a;
  });
}

console.log(greatestToLeast(numsArray));

//shortest string to longest using .sort()
function shortestToLongest(arr) {
  return arr.sort(function (a, b) {
    return b.length - a.length;
  });
}

console.log(shortestToLongest(stringArr));

//.sort() array alphabetically
function alphabetical(arr) {
  return arr.sort(function (a, b) {
    return a.localeCompare(b);
  });
}

console.log(alphabetical(stringArr));

//.sort() in array by age
function byAge(arr) {
  return arr.sort(function (a, b) {
    return a.age - b.age;
  });
}

console.log(byAge(objectArr));
