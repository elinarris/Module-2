//rest operator below

collectAnimals = (...array) => console.log(array);

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
//SHOWS: ["dog", "cat", "mouse", "jackolope", "platypus"]

//------------------------------------

//object literals below

function combineFruit(fruit, sweets, vegetables) {
  return { fruit: fruit, sweets: sweets, vegetables: vegetables };
}

console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]));

//SHOWS: {
//   fruit: [ 'apple', 'pear' ],
//   sweets: [ 'cake', 'pie' ],
//   vegetables: [ 'carrot' ]
// }

//------------------------------------

// destructuring below

const vacation = {
  location: "Burly Idaho",
  duration: "2 weeks",
};

const { location, duration } = vacation;

parseSentence = (e) =>
  `We're going to have a good time in ${location} for ${duration}.`;

console.log(parseSentence(vacation));

//SHOWS: We're going to have a good time in Burly Idaho for 2 weeks.

//------------------------------------

//deconstruct below

const array = ["item1", "dog", "yoga mat"];

// function returnFirst(items){
//     const firstItem = items[0]; //change this line to be es6 - *answer below
//     return firstItem
// }

const firstItem = (items) => items[0];

console.log(firstItem(array));

//SHOWS: item1

//------------------------------------

//deconstruction and template literals below

const favoriteActivities = [
  "magnets",
  "snowboarding",
  "philanthropy",
  "janitor work",
  "eating",
];

returnFavorites = (arr) =>
  `My top three favorite activities are ${arr[1]}, ${arr[2]}, and ${arr[4]}.`;

console.log(returnFavorites(favoriteActivities));

//SHOWS: My top three favorite activities are snowboarding, philanthropy, and eating.

//------------------------------------

// spread and rest operator below

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals = (...arrays) =>
  (animals = [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]);

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

//SHOWS: ["dog", "cat", "mouse", "jackolope", "platypus"]

//------------------------------------

// make more es6xy below

function product(...numbers) {
  numbers = [...numbers];
  return numbers.reduce((acc, number) => acc * number, 1);
}

console.log(product(1, 1, 6, 1, 2));

//SHOWS: 12

//------------------------------------

// make more es6xy below

unshift = (array, ...nums) => [...nums].concat(array);

console.log(unshift(["wonder", "yolo", "peanut"], 2, 3, 1, 4, 7));

//SHOWS: [ 2, 3, 1, 4, 7, 'wonder', 'yolo', 'peanut' ]

//------------------------------------

//object literals, destructuring, simplified below (couldn't figure out)

function populatePeople(names) {
  return names.map((name) => (name = `${firstName} ${lastName}`));
}

const populatePeople = [{ firstName: "Frank", lastName: "Peterson" },
  { firstName: "Suzy", lastName: "Degual" },
  { firstName: "Liza", lastName: "Jones" }
];

console.log(populatePeople());

//SHOWS:
