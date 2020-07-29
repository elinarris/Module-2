const nums = [1, 3, 5, 6, 8, 10];
const voters = [
  { name: "Robin", voted: true, age: 44 },
  { name: "Jason", voted: false, age: 18 },
  { name: "Julie", voted: false, age: 23 },
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];
const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];
const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

// total of all numbers
function total(arr) {
  return arr.reduce(function (final, num) {
    return (final += num);
  });
}

console.log(total(nums));

// long string of all numbers
function stringConcat(arr) {
  return arr.reduce(function (final, num) {
    return (final += num++);
  }, []);
}

console.log(stringConcat(nums));

// count of people who voted, in object form
function whoVoted(people) {
  return people.reduce(
    function (final, vote) {
      if (vote.voted) {
        final.didVote++;
      } else {
        final.didntVote++;
      }
      return final;
    },
    { didVote: 0, didntVote: 0 }
  );
}

console.log(whoVoted(voters));

// how much would cost to buy everything at once
function buyAtOnce(arr) {
  return arr.reduce(function (final, monies) {
    return (final += monies.price);
  }, 0);
}

console.log(buyAtOnce(wishlist));

// flatten an array of arrays into single array
function flatten(arr) {
  return arr.reduce(function (final, result) {
    return final.concat(result);
  });
}

console.log(flatten(arrays));

//array of potential voters return an object representing the results of the vote
//youth, mid, old, which of those in those age groups voted
function voterResults(arr) {
  return arr.reduce(
    function (final, voter) {
      if (voter.age >= 18 && voter.age <= 25) {
        final.youth++;
        if (voter.voted) {
          final.youthVoted++;
        }
      }
      if (voter.age >= 26 && voter.age <= 35) {
        final.mid++;
        if (voter.voted) {
          final.midVoted++;
        }
      }
      if (voter.age >= 36 && voter.age <= 55) {
        final.old++;
        if (voter.voted) {
          final.oldVoted++;
        }
      }
      return final;
    },
    { youth: 0, mid: 0, old: 0, youthVoted: 0, midVoted: 0, oldVoted: 0 }
  );
}

console.log(voterResults(voters));
