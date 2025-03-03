//A named function that can be called before it's declared
console.log(add(2, 37));
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

//A function assigned to a variable (not hoisted) Example
// console.log(multiply(2, 4)); error
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(2, 4));
