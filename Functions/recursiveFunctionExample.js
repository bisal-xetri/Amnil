// Recursive Function => function call itself

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5)); //5*4*3*2 //it store value in the call stack until the condition meets

function fibonacci(num) {
  if (num <= 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}
console.log(fibonacci(8));

function ascending(num) {
  if (num > 0) {
    ascending(num - 1);
    console.log(num);
  }
}
function descending(num) {
  if (num > 0) {
    console.log(num);
    ascending(num - 1);
  }
}
// function notOk(n) {
//   console.log(n);
//   notOk(n + 1);
// }
