// The this keyword in JavaScript refers to the object that is executing the current function. However, its value depends on how and where it is used.
// console.log(this);
// console.log(this === window);

//this Inside an Object
// "use strict";
const person = {
  name: "Bishal",
  greet: function () {
    console.log(this.name);
  },
};

person.greet();

//this in a Function

function show() {
  console.log(this);
}

show();

// this in setTimeout & setInterval
const person1 = {
  name: "Ram",
  greet: function () {
    setTimeout(function () {
      console.log(this.name); // `this` is `window`, so `name` is undefined
    }, 1000);
  },
  //   greet: function() {
  //     setTimeout(() => {
  //         console.log(this.name); // `this` is `person`
  //     }, 1000);
  // }
};

person1.greet();
