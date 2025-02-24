// splice() — Modifies the Original Array
// Purpose: Adds, removes, or replaces elements in-place.
// Changes the original array.
// Returns the removed elements (if any).

const fruits = ["apple", "banana", "orange", "grape"];
const removed = fruits.splice(1, 2); // Removes 2 elements starting from index 1
console.log(fruits); // ["apple", "grape"]
console.log(removed); // ["banana", "orange"]

const colors = ["red", "blue"];
colors.splice(1, 0, "green", "yellow"); // Adds elements at index 1
console.log(colors); // ["red", "green", "yellow", "blue"]

const numbers = [1, 2, 3, 4];
numbers.splice(2, 1, 99); // Replaces 1 element at index 2
console.log(numbers); // [1, 2, 99, 4]

// slice() — Does NOT Modify the Original Array
// Purpose: Extracts a section of an array.
// Doesn’t change the original array.
// Returns a new array with the selected elements.

const animals = ["cat", "dog", "rabbit", "elephant"];
const sliced = animals.slice(1, 3); // Takes index 1 up to 2
console.log(sliced);
console.log(animals);

const letters = ["a", "b", "c", "d"];
const slice = letters.slice(2); // From index 2 to end
console.log(sliced); // ["c", "d"]

const numbers2 = [10, 20, 30, 40, 50];
const lastTwo = numbers2.slice(-2); // Last two elements
console.log(lastTwo); // [40, 50]
