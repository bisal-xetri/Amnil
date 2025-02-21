// Use for...of for arrays, strings, or other iterables to directly access values.
// With an array
const arr = [5, 6, 7, 9, 10];
for (const value of arr) {
  console.log(value);
}

// With a string
const str = "helloworld";
for (const char of str) {
  console.log(char);
}

//for...of does not work with plain objects (non-iterables):
const obj = { a: 1, b: 2 };
for (const value of obj) {
  console.log(value);
}
