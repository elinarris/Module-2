const arr = [4, 3, 2, 8, 6, 1, 0];
const array = [
  { name: "James", age: 20 },
  { name: "Anthony", age: 22 },
  { name: "Caleb", age: 25 },
  { name: "Paula", age: 29 },
  { name: "Rikki", age: 28 },
];

const names = ["JacKson", "carlos", "SARA", "jOSiE"];

//make doubles

function doubleNumbers(nums) {
  return nums.map(function (num) {
    return num * num;
  });
}

console.log(doubleNumbers(arr));

//make arr strings

function stringItUp(nums) {
  return nums.map(function (num) {
    return num.toString();
  });
}

console.log(stringItUp(arr));

//capitalize each of an array of names

function capitalizeNames(arr) {
  return arr.map(function (name) {
    const firstSlice = name.slice(0, 1);
    const secondSlice = name.slice(1, name.length);

    const fullName = firstSlice.toUpperCase() + secondSlice.toLowerCase();

    return fullName;
  });
}

console.log(capitalizeNames(names));

//make array of strings of just names

function namesOnly(arr) {
  return arr.map(function (names) {
    return names.name;
  });
}

console.log(namesOnly(array));

//make array of strings of whether or not they go in Matrix

function makeStrings(arr) {
  arr.map(function (users) {
    if (users.age < 23) {
      return console.log(`${users.name} cannot go to Matrix. Bummer.`);
    } else if (users.age > 23) {
      return console.log(`Fiiiine. ${users.name} can go to the Matrix.`);
    } else {
      console.log(`Nothing happened.`);
    }
  });
}

console.log(makeStrings(array));

//names and ages in h1 & h2

function readyToPutInTheDom(arr) {
  return arr.map(function (changes) {
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    h1.textContent = changes.name;
    h2.textContent = changes.age;

    return (
      document.getElementById("body").append(h1) +
      document.getElementById("body").append(h2)
    );
  });
}

console.log(readyToPutInTheDom(array));
