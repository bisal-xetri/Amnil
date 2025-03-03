//immediately invoked function expression
//Runs immediately after definition.
// (function greet() {
//   console.log("Hello Good Afternoon!");
// })();
greet();
let greet = function () {
  let msg = "Hello";
  if (true) {
    console.log(msg);
  }
};
greet();
