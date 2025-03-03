// Purpose:
// Expands or "spreads" an iterable (e.g., array, string, object) into individual elements.

// Use Cases:
// Copying arrays or objects.
// Merging arrays or objects.
// Passing elements of an array as arguments to a function.

// Spreading arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

// Spreading objects
const obj1 = { name: "Ram", age: 23 };
const obj2 = { ...obj1, city: "Kathmandu" };
console.log(obj2);

// Passing elements as arguments
const nums = [1, 2, 3];
console.log(Math.max(...nums));
