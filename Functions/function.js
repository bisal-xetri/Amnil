function add(a, b) {
  //dynamically typed language we don't know the return type of function here
  return a + b;
}
console.log(add(10, 20)); //arguments

// let add1 = new Function("console.log('hi')");
// console.log(add1);

function greeting() {
  console.log("Hello Good Afternoon!");
}
greeting.call(); //another techniques to call function
//add.call(add,1,2,3)

let sum = 0;
function add2(...rest) {
  rest.forEach((element) => {
    sum += element;
  });
  console.log(sum);
}

add2(10, 20, 30, 40);

//
// function student(name1, name2, name3, [a, ...rest]) {
//   console.log(name1, rest);
// }
// student("Bishal", "Bibek", "Bijay", ["Ram", "Hari", "John"]);

let studentData = {
  name: "Bishal",
  address: "Teku,Kathmandu",
};

function student1(a, { name, address }) {
  console.log(name, address);
}
student1("bibek", studentData);
