const peopleArray = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47,
  },
  {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12,
  },
  {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78,
  },
  {
    firstName: "Morty",
    lastName: "Smith",
    age: 29,
  },
  {
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27,
  },
  {
    firstName: "Pasha",
    lastName: "Datsyuk",
    age: 13,
  },
  {
    firstName: "Lev",
    lastName: "Tolstoy",
    age: 82,
  },
];

//main function
function mainFunc(arr) {
  const alphabeticalArray = sortedAlphabetically(arr);
  const newArray = filteredByAge(alphabeticalArray);
  return addLi(newArray);
}

//will .filter who is over 18
function filteredByAge(arg) {
  return arg.filter(function (person) {
    if (person.age >= 18) {
      return person;
    }
  });
}

//will .sort by last name, alphabetically
function sortedAlphabetically(arg) {
  return arg.sort(function (a, b) {
    return a.lastName.localeCompare(b.lastName);
  });
}

//will add to DOM
function addToHtml(arg) {
  return arg.map(function (person) {
    const li = document.createElement("li");
    li.textContent = `${person.firstName} ${person.lastName} is ${person.age}`;
    return document.querySelector("body").append(li);
  });
}

//function to add <li></li> around string using .reduce and .push
function addLi(event) {
  return event.reduce(function (final, user) {
    final.push(`<li>${user.firstName} ${user.lastName} is ${user.age}</li>`);
    return final;
  }, []);
}

//where magic happens
// console.log(mainFunc(peopleArray));

// 1. Returns a list of everyone older than 18, which is
// 2. sorted alphabetically by last name, and where
// 3. each name and age is embedded in a string that looks like an HTML <li> element.

//Output:
// [
//     "<li>Kyle Mooney is 27</li>",
//     "<li>Sarah Palin is 47</li>",
//     "<li>Rick Sanchez is 78</li>",
//     "<li>Morty Smith is 29</li>",
//     "<li>Lev Tolstoy is 82</li>"
// ]

// const form = document('myForm');

// form.addEventListener("submit", function(e)) {
//   e.preventDefault();

// }

// localStorage.setItem("name", 'Jason')
// const jason = localStorage.getItem("name")

// const nums = [1, 3, 5, 7, 4];

// // function myFunc(event) {
// //   return event.forEach(function (num) {
// //    if (num === 3) {
// // console.log(num)
// //    }
// //   });
// // }

// // console.log(myFunc(nums))

// function reduceFunc(event) {
//   return event.reduce(function (final, num) {
//     return (final += num);
//   });
// }

// console.log(reduceFunc(nums));


let count = 0
let intervalKey

function timer () {
  console.log(setInterval)
}

intervalKey = setInterval(timer, 1000)