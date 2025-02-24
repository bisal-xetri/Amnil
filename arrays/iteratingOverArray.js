//map(): Transforms each element and returns a new array.
const numbers = [1, 2, 3, 4, 5, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);
console.log(numbers);

// forEach(): Loops over each element (doesn’t return anything).
const names = ["Bishal", "Aarav", "Mira"];
names.forEach((name) => console.log(name));
