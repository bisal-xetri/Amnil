// push(): Adds elements to the end of an array.
const fruits = ["apple", "banana", "pineapple"];
fruits.push("orange");
console.log(fruits);

//pop(): Removes the last element and returns it.
const numbers = [1, 2, 3, 5, 8];
const last = numbers.pop();
console.log(last);
console.log(numbers);

// unshift(): Adds elements to the beginning of an array.
const colors = ["blue", "green"];
colors.unshift("red");
console.log(colors);

// shift(): Removes the first element and returns it.
const letters = ["a", "b", "c"];
const first = letters.shift();
console.log(first);
console.log(letters);
