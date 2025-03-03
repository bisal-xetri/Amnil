function outer() {
  console.log("outer");
  inner();
  function inner() {
    console.log("I am Inner function");
  } //
}
console.log(outer());

function outer1(x, y) {
  return function inner1(a, b) {
    console.log(a, b);
  };
}

console.log(outer1()(2, 3));
