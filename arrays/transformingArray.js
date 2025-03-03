//reduce(): Reduces an array to a single value.
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

//sort(): Sorts an array (by default as strings).
const numbers2 = [3, 1, 4, 2];
numbers2.sort((a, b) => a - b);
// numbers2.sort((a,b)=>b-a);
console.log(numbers2);
console.log(typeof numbers2);

// reverse(): Reverses the array.
const letters = ["a", "b", "c"];
letters.reverse();
console.log(letters);
