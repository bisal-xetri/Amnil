//Purpose:
// Collects multiple elements into a single array or object.
// It is used in function parameters or destructuring to represent "the rest of the elements."

// Use Cases:
// Capturing remaining function arguments.
// Extracting remaining elements during destructuring.

// Rest in functions
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4));

// Rest in array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);
console.log(second);
console.log(rest);

// Rest in object destructuring
const user = { name: "Bishal", age: 22, city: "Kathmandu" };
const { name, ...others } = user;
console.log(name);
console.log(others);
