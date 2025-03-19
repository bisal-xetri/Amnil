// Object Property Shorthand
let fName = "Bishal";
let age = 22;

let person = { fName, age }; // Instead of { name: name, age: age }
console.log(person);

//Shorthand Method Definition
let user = {
  fName: "Bishal",
  greet() {
    // Instead of greet: function() { ... }
    console.log(`Hello, ${this.fName}!`);
  },
};

user.greet(); // Hello, Bishal!

//Ternary Operator (Shorthand for if...else)
let age1 = 20;
let status1 = age1 >= 18 ? "Adult" : "Minor";
console.log(status1); // "Adult"

//Logical AND (&&) for Short Conditional Execution
let isLoggedIn = true;
isLoggedIn && console.log("Welcome!"); // Prints "Welcome!" if isLoggedIn is true

//Logical OR (||) for Default Values
let username = "";
let displayName = username || "Guest"; // If username is empty, use "Guest"
console.log(displayName); // "Guest"

//Nullish Coalescing (??) for Safer Defaults
let points = 0;
let score = points ?? 10; // If points is null or undefined, use 10
console.log(score); // 0 (because 0 is a valid number)

//Arrow Function (Shorthand for Functions)
const add = (a, b) => a + b;
console.log(add(5, 3));

// Short-circuiting with && and ||
let user1 = { name: "Bishal" };
console.log(user1.name && "User exists"); // "User exists"

let username1 = "";
console.log(username1 || "Guest"); // "Guest" (because username is falsy)

// Optional Chaining (?.)
//Prevents errors when accessing deeply nested properties.
let user2 = { profile: { age: 22 } };
console.log(user2.profile?.age);
console.log(user2.address?.city); // undefined (instead of an error)

//Destructuring Shorthand
const person1 = { name: "Ram", address: "Kathmandu" };
const { name, address } = person;
console.log(name, age);

//array destructuring
const colors = ["red", "blue", "green"];
const [first, second] = colors;
console.log(first, second);

//Template Literals (Shorthand for String Concatenation)
const name3 = "John";
const message = `Hello, ${name3}! Welcome.`;
console.log(message);

//Spread Operator (...)
//Cloning an array
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr);
//Merging objects
const user3 = { name: "Bishal" };
const user4 = { age: 22 };
const mergedUser = { ...user3, ...user4 };
console.log(mergedUser);

//Rest Operator (...)
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4));

//Converting a String to a Number
const str = "42";
const num = +str; // Instead of parseInt(str, 10)
console.log(num);

//Swapping Variables Without a Temp Variable
let a = 5,
  b = 10;
[a, b] = [b, a];
console.log(a, b);

//Converting an Object to an Array
//get keys array
const userInfo = { name: "Sijan", age: 23 };
console.log(Object.keys(userInfo));

//get value array
console.log(Object.values(userInfo));

//get key value pair array
console.log(Object.entries(userInfo));

// Flatten a Nested Array
const arr1 = [1, [2, 3], [4, [5, 6]]];
console.log(arr1.flat(Infinity));

//Removing Duplicates from an Array
const arr3 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = [...new Set(arr3)];
console.log(uniqueArr);

//Convert a Boolean to a Number
const isActive = true;
console.log(+isActive);
console.log(+false);

//Loop Through an Object
const person3 = { name: "Bishal", age: 40 };

for (let [key, value] of Object.entries(person3)) {
  console.log(`${key}: ${value}`);
}

//Convert a String to an Array
const str1 = "hello";
console.log([...str1]);

//Shuffle an Array (Fisher-Yates Algorithm)
const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
console.log(shuffle([1, 2, 3, 4, 5]));
