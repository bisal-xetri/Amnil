//These default values are used when the function is called without passing the corresponding arguments.

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet();
