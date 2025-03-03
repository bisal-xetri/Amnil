//filter() Returns a new array with elements that pass a condition.
const ages = [18, 25, 30, 17];
const adults = ages.filter((age) => age >= 18);
console.log(adults);

//find() Returns the first element that matches a condition.
const users = [
  { name: "Bishal", age: 22 },
  { name: "Sam", age: 19 },
  { name: "Sita", age: 19 },
];
const user = users.find((user) => user.age === 19);
console.log(user);

// findIndex() Returns the index of the first matching element.
const numbers = [10, 20, 30, 20];
const index = numbers.findIndex((num) => num === 20);
console.log(index);

console.log(numbers.includes(25)); //return true or false
console.log(numbers.indexOf(30));
