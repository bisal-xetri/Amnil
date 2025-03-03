//An object can be created using curly braces {} with an optional list of properties. Each property is a key-value pair, where the key is a string (or Symbol) and the value can be anything.

let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "blue",
  start: function () {
    console.log("The car has started.");
  },
  stop: function () {
    console.log("The car has stopped.");
  },
  drive: function () {
    console.log("The car is driving.");
  },
};
// for (let key in car) {
//   console.log(`${key} : ${car[key]}`);
// }

// Accessing properties
console.log(car.make);
console.log(car["model"]);

// Calling methods
car.start();
car.drive();
car.stop();

// Adding a new property
car.mileage = 15000;
console.log(car.mileage);

// Modifying a property
car.color = "red";
console.log(car.color);

// Deleting a property
delete car.mileage;
console.log(car.mileage);

function createFlashCard(question, answer) {
  this.question = question;
  this.answer = answer;
}

const result = new createFlashCard("What is the capital of France?", "Paris");
console.log(result);
console.log(result.question, result.answer);
