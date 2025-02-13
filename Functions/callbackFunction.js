//A function passed as an argument to another function.
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Bishal", sayGoodbye);
