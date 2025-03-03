//Using Object Literal
const person = {
  name: "Bishal",
  "full Name": "Bishal Dhakal",
  age: 22,
  city: "Kathmandu",
};
console.log(person.name);
// console.log(person.full name)
console.log(person["full Name"]);

//Using new Object()
const car = new Object();
car.brand = "Toyota";
car.model = "Camry";
car.year = 2022;
console.log(car.model);

//Using Constructor Function
function Animal(name, species) {
  this.name = name;
  this.species = species;
}
const dog = new Animal("Buddy", "Dog");
console.log(dog.name);

// Using Object.create()
//functions inside object is called method
const prototypeObj = {
  greet: function () {
    console.log("Hello!");
  },
};
const obj = Object.create(prototypeObj);
obj.greet();
