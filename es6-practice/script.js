// var and let

const name = "John";
const age = 101;

runForLoop = (pets) => {
  let petObjects = [];
  for (let i = 0; i < pets.length; i++) {
    const pet = { type: pets[i] };
    let name;
    if (pets[i] === "cat") {
      name = "fluffy";
    } else {
      name = "spot";
    }
    console.log("pet name: ", name);
    pet.name = name;
    petObjects.push(pet);
  }
  console.log("man name: ", name);
  return petObjects;
};

runForLoop(["cat", "dog"]);

// arrow funct

const carrots = ["bright orange", "ripe", "rotten"];

mapVegetables = (arr) =>
  arr.map((carrot) => ({ type: "carrot", name: carrot }));

console.log(mapVegetables(carrots));

//...continued

const people = [
  {
    name: "Princess Peach",
    friendly: false,
  },
  {
    name: "Luigi",
    friendly: true,
  },
  {
    name: "Mario",
    friendly: true,
  },
  {
    name: "Bowser",
    friendly: false,
  },
];

filterForFriendly = (arr) => arr.filter((person) => person.friendly);

console.log(filterForFriendly(people));

//...continued

doMathSum = (a, b) => a + b;

produceProduct = (a, b) => a * b;

console.log(produceProduct(3, 5));
console.log(doMathSum(5, 5));

//...continued

const peopleArr = [
  {
    name: "Princess",
    last: "Peach",
    friendly: false,
    age: 20,
  },
  {
    name: "Luigi",
    last: "Jr",
    friendly: true,
    age: 30,
  },
  {
    name: "Mario",
    last: "Senior",
    friendly: true,
    age: 40,
  },
  {
    name: "Bowser",
    last: "Toadster",
    friendly: false,
    age: 100,
  },
];

printString = (arr) =>
  arr.map((person) => {
    let firstName = person.name;
    let lastName = person.last;
    let age = person.age;

    console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age}?`);
  });

console.log(printString(peopleArr));

// ...continued

const animals = [
  {
    type: "dog",
    name: "theodore",
  },
  {
    type: "cat",
    name: "whiskers",
  },
  {
    type: "pig",
    name: "piglette",
  },
  {
    type: "dog",
    name: "sparky",
  },
];

filterForDogs = (arr) => arr.filter((animal) => animal.type === "dog");

console.log(filterForDogs(animals));

// template string/literals

const peeps = [
  {
    place: "Las Vegas",
    name: "Theodore",
  },
  {
    place: "Rhode Island",
    name: "Alice",
  },
  {
    place: "Canada",
    name: "Hank",
  },
  {
    place: "Iceland",
    name: "Perla",
  },
];

function greeting(arr) {
  return arr.map(function (person) {
    return console.log(`Hi ${person.name}!
    
    Welcome to ${person.place}.
    
    I hope you enjoy your stay. Please ask the president of ${person.place} if you need anything.`)
  })
}

console.log(greeting(peeps))