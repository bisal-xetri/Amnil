//this keyword refers to the current object

let person = {
  name: "Alice",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

person.greet();

function printName() {
  this.name = "Bishal";
  const print = () => {
    console.log(this.name);
  };
  print();
}

const obj = new printName();
