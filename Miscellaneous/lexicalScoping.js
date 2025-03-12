//combination of function bundle together
function init() {
  let name = "Bishal";
  function displayName() {
    console.log(name);
  }
  displayName();
}
init();

//example
function outer() {
  let userName = "Ram";
  //console.log(message);
  function inner() {
    let message = "Hello";
    console.log("inner", userName);
  }
  function innerTwo() {
    console.log("InnerTwo", userName);
    //console.log(message);
  }
  innerTwo();
  inner();
}
outer();
//console.log("outer", userName);
