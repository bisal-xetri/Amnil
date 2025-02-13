// Recursive Function => function call itself

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5)); //5*4*3*2 //it store value in the call stack until the condition meets
